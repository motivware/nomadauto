# frozen_string_literal: true

class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[index show]

  def index
    # GET request for which / is our home page
    # @basic_plan = Plan.find(1)
    @pro_plan = Plan.find(2)
    # @invite_plan = Plan.find(3)
    @user = User.find(session[:user_id])
    @projects = current_account.user_projects if Project.exists?(user: current_account)
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
      redirect_to projects_path
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :details, :workorder_id, :deal_id)
  end
end
