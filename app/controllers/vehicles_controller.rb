class VehiclesController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @vehicles = @project.vehicles.all
  end

  def show
    @vehicle = Vehicle.find(params[:id])
  end

  def new
    @project = Project.find(params[:project_id])
    @vehicle = Vehicle.new()
  end

  def create
    @project = Project.find(params[:project_id])
    @vehicle = @project.vehicles.create(vehicle_params)

    if @vehicle.save
      @vehicles = @project.vehicles.all
      render 'index'
    else
      render 'new'
    end
  end

  def edit
    @vehicle = Vehicle.find(params[:id])
  end

  def update
    @project = Project.find(params[:project_id])
    @vehicle = Vehicle.find(params[:id])
    if @vehicle.update_attributes(vehicle_params)
      flash[:success] = "Vehicle updated"
      @vehicles = @project.vehicles.all
      render 'index'
    else
      render 'edit'
    end
  end

  def destroy
    @project = Project.find(params[:project_id])
    Vehicle.find(params[:id]).destroy
    flash[:success] = 'Vehicle deleted'
    @vehicles = @project.vehicles.all
    render 'index'
  end
  private

  def vehicle_params
    params.require(:vehicle).permit(:vin, :make, :model,
                                    :year, :miles, :engine,
                                    :license_plate, :transmission
                                    :project_id)
  end
end
