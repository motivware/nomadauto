# frozen_string_literal: true

class UsersController < ApplicationController
  protect_from_forgery

  def index
    @users = User.all
    @project = Project.where(user_id: current_user).pluck(:id).first
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
    @invite = Invite.find_by(params[:email])
    @token = Invite.find_by(token: params['invite_token'])

    @plan = params[:plan] == '3'

    if params[:plan] == '3'
      @company_name = User.find_by_name(request.subdomain)
      @invite = Invite.find_by(params[:email])
    end

    @token = params[:invite_token]
  end

  def create
    @user = User.new(user_params)
    @user.plan_id = params[:plan] if params[:plan]

    if @user.plan_id == 3
      @user.save(validate: false)
    elsif @user.valid?
      @user.save
    else
      render 'new' and return
    end

    # Auto-activate so user can log in immediately
    @user.activate

    # Still send confirmation email (non-blocking)
    @user.send_activation_email

    # Create default project
    project = Project.create(title: @user.subdomain, details: "Project", user_id: @user.id)

    # Log in immediately
    log_in @user
    flash[:success] = 'Welcome to SynthMonitor! Please confirm your email within 24 hours.'
    redirect_to projects_url(subdomain: @user.subdomain)
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = 'Profile updated'
      redirect_to root_url
    else
      render 'edit'
    end
  end

  def destroy
    User.find(params[:id]).destroy
    flash[:success] = 'User deleted'
    redirect_to users_url
  end

  private

  def correct_user
    @user = User.find(session[:user_id])
    redirect_to(root_url) unless @user == current_user
  end

  def select_plan
    unless params[:plan] == '1' || params[:plan] == '2' || params[:plan] == '3'
      flash[:notice] = 'Please select a membership plan to sign up.'
      redirect_to root_url
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :plan_id,
                                 :password_confirmation, :subdomain)
  end
end
