# frozen_string_literal: true

module Users
  class ActivitiesController < UsersController
    def index
      @project = Project.find(params[:project_id])

      @activities = @project.activities.order("created_at desc") if Activity.exists?
    end

    def permitted_params
      params.require(:activity).permit(:user, :ticket, :trackable, :action, :project_id)
    end
  end
end
