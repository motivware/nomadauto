# frozen_string_literal: true

class MonitorsController < ApplicationController
  before_action :logged_in_user
  before_action :enforce_trial!
  before_action :check_email_confirmation
  before_action :set_project
  before_action :set_monitor, only: %i[show edit update destroy toggle run_now]

  def index
    @monitors = @project.site_monitors.order(created_at: :desc)
  end

  def show
    authorize @monitor
    @runs = @monitor.monitor_runs.recent.limit(50)
  end

  def new
    @monitor = @project.site_monitors.build
    @monitor.steps = [{ 'action' => 'visit', 'url' => '' }]
  end

  def create
    @monitor = @project.site_monitors.build(monitor_params)
    authorize @monitor
    if @monitor.save
      redirect_to project_monitor_path(@project, @monitor), notice: 'Monitor created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    authorize @monitor
  end

  def update
    authorize @monitor
    if @monitor.update(monitor_params)
      redirect_to project_monitor_path(@project, @monitor), notice: 'Monitor updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @monitor
    @monitor.destroy
    redirect_to project_monitors_path(@project), notice: 'Monitor deleted.'
  end

  def toggle
    authorize @monitor
    new_status = @monitor.status == 'active' ? 'paused' : 'active'
    @monitor.update!(status: new_status)
    redirect_to project_monitor_path(@project, @monitor), notice: "Monitor #{new_status}."
  end

  def run_now
    authorize @monitor
    MonitorExecutionJob.perform_later(@monitor.id, force: true)
    redirect_to project_monitor_path(@project, @monitor), notice: 'Test run queued.'
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def set_monitor
    @monitor = @project.site_monitors.find(params[:id])
  end

  def monitor_params
    permitted = params.require(:site_monitor).permit(:name, :url, :interval_minutes, :status, :steps_json)
    if permitted[:steps_json].present?
      permitted[:steps] = JSON.parse(permitted[:steps_json])
      permitted.delete(:steps_json)
    end
    permitted
  end
end
