# frozen_string_literal: true

class AccountActivationsController < ApplicationController
  def edit
    user = User.find_by(email: params[:email])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      user.activate
      log_in user
      user.save
      flash[:success] = 'Account activated!'
      if user.plan_id == 1 || user.plan_id == 2
        Project.create(title: user.subdomain, details: "Sample project", user_id: user.id)
        @project = Project.find_by(user_id: user.id)
      	redirect_to project_contacts_url(subdomain: user.subdomain, project_id: @project)
      else user.plan_id == 3
        @project = Project.find_by(title: user.subdomain)
      	redirect_to project_contacts_url(subdomain: user.subdomain, project_id: @project)
      end
    else
      flash[:danger] = 'Invalid activation link'
      redirect_to root_url
    end
  end
end
