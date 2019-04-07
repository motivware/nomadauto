class InvoicesController < ApplicationController

  def index
    @project = Project.find(params[:project_id])
    @invoices = @project.invoices.all
  end

  def show
    @project = Project.find(params[:project_id])
    @invoice = @project.invoices.find(params[:id])
    @customer = Customer.where(id: @invoice.customer_id)
    @vehicle = Vehicle.where(id: @invoice.vehicle_id)
    @workorders = Workorder.where(id: @invoice.workorder_id)
    @parts = Part.where(id: @invoice.part_id)
  end

  def new
    @project = Project.find(params[:project_id])
    @invoice = @project.invoices.build
    @customers = @project.customers.pluck(:last_name, :id)
    #needs to be dynamic based off customer selected
    @vehicles = @project.vehicles.pluck(:make, :id)
    @workorders = @project.workorders.pluck(:title, :id)
    @parts = @project.parts.pluck(:name, :id)
    @salestax = 0.06.to_i

    #authorize @invoice

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @invoice }
    end

  end

  def create
    @project = Project.find(params[:project_id])
    @invoice = @project.invoices.create(invoice_params)

    respond_to do |format|
      if @invoice.save
        #1st argument of redirect_to is an array, in order to build the correct route to the nested resource workorder
        format.html { redirect_to project_invoices_path(@project), :notice => 'invoice was successfully created.' }
        #the key :location is associated to an array in order to build the correct route to the nested resource workorder
        format.xml  { render :xml => @invoice, :status => :created, :location => [@invoice.project, @invoice] }

        #track_activity @invoice

      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @invoice.errors, :status => :unprocessable_entity }
      end
    end
  end

  private

  def invoice_params
    params.require(:invoice).permit(:date, :subtotal, :otherfees,
                                    :salestax, :total, :paid, :due,
                                    :workorder_id, :customer_id,
                                    :vehicle_id, :part_id)
  end
end
