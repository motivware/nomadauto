# frozen_string_literal: true

class AccountActivationsController < ApplicationController
  def edit
    user = User.find_by(email: params[:email])
    if user && user.authenticated?(:activation, params[:id])
      # Clear activation digest to mark email as confirmed
      user.update_attribute(:activation_digest, nil)
      user.activate unless user.activated?
      log_in user
      flash[:success] = 'Email confirmed!'
      redirect_to projects_url(subdomain: user.subdomain)
    else
      flash[:danger] = 'Invalid activation link'
      redirect_to root_url
    end
  end
end
