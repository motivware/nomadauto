# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Pundit::Authorization
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  protect_from_forgery prepend: true, with: :exception
  helper_method %i[current_account logged_in?]

  include SessionsHelper
  helper_method :current_user

  helper_method :all
  helper_method :remaining_days

  def remaining_days
    return 0 unless current_account

    ((current_account.created_at + 30.days).to_date - Date.today).round
  end

  def enforce_trial!
    return redirect_to login_path unless current_account
    return if current_user&.plan_id == 2

    redirect_to expired_path if remaining_days <= 0
  end

  def check_email_confirmation
    return unless current_user&.confirmation_grace_expired?

    log_out
    flash[:warning] = 'Please confirm your email to continue. Check your inbox for the activation link.'
    redirect_to login_url
  end

  private

  def logged_in_user
    unless logged_in?
      store_location
      flash[:danger] = 'Please log in.'
      redirect_to login_url
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id])
  rescue ActiveRecord::RecordNotFound
  end

  def current_account
    @current_account ||= User.find_by(subdomain: request.subdomain)
  end

  def set_mailer_host
    subdomain = current_account ? "#{current_account.subdomain}." : ''
    ActionMailer::Base.default_url_options[:host] = "#{subdomain}lvh.me:3000"
  end

  def after_sign_out_path_for(_resource_or_scope)
    redirect_to logout_path(subdomain: 'www')
  end

  def after_invite_path_for(_resource_or_scope)
    users_path
  end

  def user_not_authorized
    flash[:alert] = 'You are not authorized to perform this action.'
    redirect_to(projects_path)
  end
end
