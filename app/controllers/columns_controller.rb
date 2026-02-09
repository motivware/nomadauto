class ColumnsController < ApplicationController
  before_action :set_column, only: %i[ edit update destroy ]
  before_action :set_task
  # GET /columns or /columns.json
  def index
    @columns = Column.all
  end

  # GET /columns/1 or /columns/1.json
  def show
  end

  # GET /columns/new
  def new
    @project = Project.find(params[:project_id])
    @task = Task.find(params[:task_id])

    @column = Project.find(params[:project_id]).tasks.find(params[:task_id]).columns.build
    
    # @task = @project.tasks.includes(columns: :items).find(params[:task_id])
    @column = @task.columns.new
  end

  # GET /columns/1/edit
  def edit
  end

  # POST /columns or /columns.json
  def create
    @project = Project.find(params[:project_id])
    @task = @project.tasks.find(params[:task_id])

    @column =  @task.columns.new(column_params)

    respond_to do |format|
      if @column.save
        format.html { redirect_to project_task_path(@project, @task), notice: "Column was successfully created." }
        format.json { render :show, status: :created, location: @column }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @column.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /columns/1 or /columns/1.json
  def update
    respond_to do |format|
      if @column.update(column_params)
        format.html { redirect_to project_task_path(@project, @task), notice: "Column was successfully updated." }
        format.json { render :show, status: :ok, location: @column }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @column.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /columns/1 or /columns/1.json
  def destroy
    @column.destroy

    respond_to do |format|
      format.html { redirect_to project_task_path(@project, @task), notice: "Column was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

    def set_task
      @project = Project.find(params[:project_id])
      @task = @project.tasks.includes(columns: :items).find(params[:task_id])
    end
    
    # Use callbacks to share common setup or constraints between actions.
    def set_column
      @column = @task.columns.includes(:items).find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def column_params
      params.require(:column).permit(:task_id, :project_id, :name)
    end
end
