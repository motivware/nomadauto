class ItemsController < ApplicationController
  # before_action :set_task
  # before_action :set_columns
  # before_action :set_item, only: %i[ show edit update destroy ]

  # GET /items/new
  def new
    @project = Project.find(params[:project_id])
    @task = Task.find(params[:task_id])
    @column = @task.columns.find(params[:column_id])
    # @item = @column.items.new
    @item = Project.find(params[:project_id]).tasks.find(params[:task_id]).columns.find(params[:column_id]).items.build
    
    # @task = @project.tasks.includes(columns: :items).find(params[:task_id])
  end

  # GET /items/1/edit
  def edit
    @project = Project.find(params[:project_id])
    @task = @project.tasks.includes(columns: :items).find(params[:task_id])
    @column = @task.columns.find(params[:column_id])
    @item = @column.items.find(params[:id])
  end

  # POST /items or /items.json
  def create
    @project = Project.find(params[:project_id])
    @task = Task.find(params[:task_id])

    @column =  @task.columns.find(params[:column_id])
    @item = @column.items.new(item_params)

    respond_to do |format|
      if @item.save
        format.html { redirect_to project_task_path(@project, @task), notice: "Item was successfully created." }
        format.json { render :show, status: :created, location: @item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1 or /items/1.json
  def update
    @project = Project.find(params[:project_id])
    @task = @project.tasks.includes(columns: :items).find(params[:task_id])
    @column = @task.columns.find(params[:column_id])
    @item = @column.items.find(params[:id])

    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @list, notice: "Item was successfully updated." }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1 or /items/1.json
  def destroy
    @item = @column.items.find(params[:id])
    @item.destroy

    respond_to do |format|
      format.html { redirect_to @list, notice: "Item was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # def set_task
    #   @task = @project.tasks.include(columns: :items).find(params[:task_id])
    # end

    def set_column
      @column = @task.columns.find(params[:column_id])
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = @column.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:column_id, :content)
    end
end
