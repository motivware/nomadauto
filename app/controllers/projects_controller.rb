# frozen_string_literal: true

class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[index show]

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

    @pro_plan = Plan.find(2)
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
