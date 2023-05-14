# frozen_string_literal: true

class TasksController < UsersController
  before_action :trial_expired?
  skip_before_action :verify_authenticity_token, only: %i[index show]

  def index
    @project = Project.find(params[:project_id])
    authorize @project
    @user = User.find(session[:user_id])

    if @user.plan_id == 2
      @tasks = @project.tasks.order("created_at desc") if Task.exists?
    else @user.plan_id == 3
      @tasks = @user.tasks.order("created_at desc") if Task.exists?
    end
    # if Task.where(project_id: @project)
    #   @tasks = @project.tasks.all

    #   @tasks = @project.tasks.where(status: params['status']) if params['status'].present?
    #   @tasks = @project.tasks.where(priority: params['priority']) if params['priority'].present?
    #   @tasks = @project.tasks.where(user: params['user']) if params['user'].present?

    #   @tasks = @project.tasks.order("#{sort_column} #{sort_direction}") if params['sort'].present?
    # end
  end

  def show
    # 1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])
    # 2nd you retrieve the tasks thanks to params[:id]
    @task = @project.tasks.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render xml: @task }
    end
  end

  def new
    # 1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])

    # 2nd you get all the tasks of this project
    @task = @project.tasks.build
    authorize @task

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render xml: @task }
    end
  end

  def create
    # 1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])

    # 2nd you create the task with arguments in params[:task]
    @task = @project.tasks.create(task_params)

    respond_to do |format|
      if @task.save
        # 1st argument of redirect_to is an array, in order to build the correct route to the nested resource task
        format.html { redirect_to project_tasks_path(@project), notice: 'task was successfully created.' }
        # the key :location is associated to an array in order to build the correct route to the nested resource task
        format.xml  { render xml: @task, status: :created, location: [@task.project, @task] }

        track_activity @task

      else
        format.html { render action: 'new' }
        format.xml  { render xml: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @project = Project.find(params[:project_id])

    @task = @project.tasks.find(params[:id])
  end

  def update
    # 1st you retrieve the post thanks to params[:post_id]
    @project = Project.find(params[:project_id])
    # 2nd you retrieve the comment thanks to params[:id]
    @task = Task.find(params[:id])

    respond_to do |format|
      if @task.update(task_params)
        # 1st argument of redirect_to is an array, in order to build the correct route to the nested resource comment
        format.html { redirect_to project_tasks_path(@project), notice: 'task was successfully updated.' }
        flash[:success] = 'Your task has been updated'
        format.xml { head :ok }
        track_activity @task

      else
        format.html { render action: 'edit' }
        format.xml  { render xml: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    # 1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])
    # 2nd you retrieve the task thanks to params[:id]
    @task = Task.find(params[:id])

    redirect_to project_tasks_path(@project) if @task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :status, :priority,
                                      :owner, :project_id,
                                      :user_id)
  end

  def sort_column
    params[:sort] || 'title'
  end

  def sort_direction
    params[:direction] || 'asc'
  end
end
