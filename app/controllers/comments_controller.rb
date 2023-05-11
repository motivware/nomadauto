# frozen_string_literal: true

class CommentsController < UsersController
  def create
    @project = Project.find(params[:project_id])
    @task = Task.find(params[:task_id])
    @comment = @task.comments.create(params[:comment].permit(:owner, :body))

    redirect_to project_task_path(@project, @task)
  end

  def destroy
    @project = Project.find(params[:project_id])
    @workorder = Workorder.find(params[:workorder_id])
    @comment = @workorder.comments.find(params[:id])
    @comment.destroy

    redirect_to project_workorder_path(@project, @workorder)
  end
end
