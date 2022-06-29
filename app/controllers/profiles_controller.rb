# frozen_string_literal: true

class ProfilesController < ApplicationController
  before_action :trial_expired?

  def index
    @project = Project.find(params[:project_id])
    authorize @project

    user = User.all

    @profile = Profile.where(project_id: @project).last if Profile.exists?
  end

  def show
    @project = Project.find(params[:project_id])
    @profile = Profile.find(params[:id])
  end

  # GET to /users/:user_id/profile/new
  def new
    @project = Project.find(params[:project_id])

    # Render blank profile details form
    @profile = @project.profiles.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render xml: @profile }
    end
  end

  # POST to /users/:user_id/profile
  def create
    # Ensure we have a project owner who is filling out form.
    @project = Project.find(params[:project_id])
    # Create profile linked to specific user.
    @profile = @project.profiles.create(profile_params)
    if @profile.save
      flash[:success] = 'Logo updated!'
      render 'index'
    else
      render action: :new
    end
  end

  # GET to /users/:user_id/profile/edit
  def edit
    @project = Project.find(params[:project_id])
    @profile = Profile.find(params[:id])
  end

  # PUT to /users/:user_id/profile
  def update
    # Retrieve project from the database
    @project = Project.find(params[:project_id])
    # Retrieve that users profile page
    @profile = Profile.find(params[:id])
    if @profile.update(profile_params)
      flash[:success] = 'Profile Updated!'
      # Redirect user to their profile page
      redirect_to project_profile_path(@project, @profile)
    else
      render action: :edit
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :last_name, :avatar, :job_title,
                                    :phone_number, :contact_email, :description, :project_id,
                                    :street_address, :address_line_two, :city, :state, :zipcode)
  end

  def only_current_user
    @user = User.find(params[:user_id])
    redirect_to(root_url) unless @user == current_user
  end
end
