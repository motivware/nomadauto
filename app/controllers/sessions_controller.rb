# frozen_string_literal: true

class SessionsController < ApplicationController
  before_action :set_plans, only: %i[new create]

  def new; end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      if user.confirmation_grace_expired?
        flash[:warning] = 'Please confirm your email to continue. Check your inbox for the activation link.'
        redirect_to root_url
      else
        log_in user
        params[:session][:remember_me] == '1' ? remember(user) : forget(user)
        redirect_to projects_url(subdomain: user.subdomain)
      end
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url(subdomain: 'www')
  end

  private

  def set_plans
    @basic_plan = Plan.find_or_create_by!(id: 1) { |p| p.name = 'basic'; p.price = 0 }
    @pro_plan = Plan.find_or_create_by!(id: 2) { |p| p.name = 'pro'; p.price = 30 }
    @invite_plan = Plan.find_or_create_by!(id: 3) { |p| p.name = 'invite'; p.price = 0 }
  end
end
