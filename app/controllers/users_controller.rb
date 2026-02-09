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

    if params[:plan]
      @user.plan_id = params[:plan]
      if @user.plan_id == 2
        @user.save_with_subscription
      else
        @user.save
      end
    end

    if !@token.nil?
      org = Invite.find_by_token(@token).user_group
      @user.user_groups.push(org)
    elsif @user.plan_id == 3
      @user.save(validate: false)
      @user.send_activation_email
      flash[:info] = 'Please check your email to activate your account.'
      redirect_to root_url
    elsif @user.valid?
      @user.save
      @user.send_activation_email
      flash[:info] = 'Please check your email to activate your account.'
      redirect_to root_url
    else
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
    @pro_plan = Plan.find(2)
  end

  def update
    if params[:plan] == '1' || params[:plan] == '3'
      @user = User.find(params[:id])
      @user.update(user_params)
      flash[:success] = 'Profile updated'
      redirect_to root_url
    else
      params[:plan] == '2'
      @user = User.find(params[:id])
      @user.stripe_card_token = params[:stripe_card_token]
      @user.save_with_subscription
      @user.update(plan_id: 2)
      flash[:info] = 'You are now signed up for the pro account'
      redirect_to projects_path
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
