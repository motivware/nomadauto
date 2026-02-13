# frozen_string_literal: true

class ProjectsController < ApplicationController
  before_action :enforce_trial!, only: %i[index show new create]
  before_action :check_email_confirmation, only: %i[index show new create]

  def index
    unless current_account
      redirect_to root_url(subdomain: 'www') and return
    end
    @user = User.find(session[:user_id])
    @projects = current_account.user_projects

    if @projects.size == 1
      redirect_to project_monitors_path(@projects.first) and return
    elsif @projects.empty?
      redirect_to new_project_path and return
    end

  end

  def show
    @project = Project.find(params[:id])
    authorize @project
  end

  def new
    @project = Project.new
    # @workorder = workorder.new(project_id: params[:project_id])
  end

  def create
    @project = current_account.projects.build(project_params)
    if @project.save
      flash[:notice] = "#{@project.title} is processing."
      redirect_to project_path(@project)
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :details)
  end
end
