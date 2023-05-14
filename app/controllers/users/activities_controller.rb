# frozen_string_literal: true

module Users
  class ActivitiesController < UsersController
    def index
      @project = Project.find(params[:project_id])
      @user = User.find(session[:user_id])
      if @user.plan_id == 2
        @activities = @project.activities.order("created_at desc") if Activity.exists?
      else @user.plan_id == 3
        @activities = @user.activities.order("created_at desc") if Activity.exists?
      end
    end

    def permitted_params
      params.require(:activity).permit(:user, :ticket, :trackable, :action, :project_id)
    end
  end
end
