# frozen_string_literal: true

class PasswordResetsController < ApplicationController
  before_action :get_user,   only: %i[edit update]
  before_action :valid_user, only: %i[edit update]
  before_action :check_expiration, only: %i[edit update]

  def new; end

  def create
    @user = User.find_by(email: params[:password_reset][:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
    end
    flash[:info] = 'If an account with that email exists, we have sent password reset instructions.'
    redirect_to root_url
  end

  def edit; end

  def update
    if both_passwords_blank?
      flash.now[:danger] = "Password/confirmation can't be blank"
      render 'edit'
    elsif @user.update(user_params)
      log_in @user
      flash[:success] = 'Password has been reset.'
      redirect_to root_url(subdomain: @user.subdomain)
    else
      render 'edit'
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end

  # Returns true if password & confirmation are blank.
  def both_passwords_blank?
    params[:user][:password].blank? &&
      params[:user][:password_confirmation].blank?
  end

  # Before filters
  def get_user
    @user = User.find_by(email: params[:email])
  end

  # Confirms a valid user.
  def valid_user
    unless @user&.activated? &&
           @user&.authenticated?(:reset, params[:id])
      redirect_to root_url
    end
  end

  # Checks expiration of reset token.
  def check_expiration
    if @user.password_reset_expired?
      flash[:danger] = 'Password reset has expired.'
      redirect_to new_password_reset_url
    end
  end
end
