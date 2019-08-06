class PartsController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @parts = @project.parts.all
  end

  def show
    @part = Part.find(params[:id])
    @vehicle = @part.vehicle_id
  end

  def new
    @project = Project.find(params[:project_id])
    @vehicles = @project.vehicles.all
    @part = Part.new()
  end

  def create
    @project = Project.find(params[:project_id])
    @part = @project.parts.create(part_params)

    if @part.save
      @parts = @project.parts.all
      render 'index'
    else
      render 'new'
    end
  end

  def edit
    @part = Part.find(params[:id])
  end

  def update
    @project = Project.find(params[:project_id])
    @part = Part.find(params[:id])

    if @part.update_attributes(part_params)
      flash[:success] = "Part updated"
      @parts = @project.parts.all
      render 'index'
    else
      render 'edit'
    end
  end

  def destroy
    @project = Project.find(params[:project_id])
    Part.find(params[:id]).destroy
    flash[:success] = "Part deleted"
    @parts = @project.parts.all
    render 'index'
  end

  private

  def part_params
    params.require(:part).permit(:name, :description, :vehicle_id, :project_id, :price, :quantity, :part_number)
  end
end
