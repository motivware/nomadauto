# frozen_string_literal: true

module Users
  class ActivitiesController < UsersController
    def index
      @project = Project.find(params[:project_id])

      @activities = Activity.order("created_at desc")
    end

    def permitted_params
      params.require(:activity).permit(:user, :ticket, :trackable, :action)
    end
  end
end
