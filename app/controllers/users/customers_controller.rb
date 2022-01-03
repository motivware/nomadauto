# frozen_string_literal: true

module Users
  class CustomersController < UsersController
    before_action :trial_expired?

    def index
      @project = Project.find(params[:project_id])
      authorize @project

      @customers = @project.customers.all if Customer.exists?
    end

    def new
      @project = Project.find(params[:project_id])

      @customer = @project.customers.build
      authorize @customer

      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render xml: @customer }
      end
    end

    def show
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the workorders thanks to params[:id]
      @customer = @project.customers.find(params[:id])
      authorize @customer

      respond_to do |format|
        format.html # show.html.erb
        format.xml  { render xml: @customer }
      end
    end

    def edit
      @project = Project.find(params[:project_id])

      @customer = @project.customers.find(params[:id])
    end

    def create
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])

      # 2nd you create the workorder with arguments in params[:workorder]
      @customer = @project.customers.create(customer_params)

      if @customer.save
        company = params[:customer][:customer]
        first_name = params[:customer][:first_name]
        last_name = params[:customer][:last_name]
        phone_number = params[:customer][:phone_number]
        website = params[:customer][:website]
        email = params[:customer][:email]
        flash[:success] = 'Record Saved.'
        redirect_to project_customers_path

        track_activity @customer
      else
        redirect_to new_project_customers_path
      end
    end

    def update
      # 1st you retrieve the post thanks to params[:post_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the comment thanks to params[:id]
      @customer = customer.find(params[:id])

      respond_to do |format|
        if @customer.update_attributes(customer_params)
          # 1st argument of redirect_to is an array, in order to build the correct route to the nested resource comment
          format.html { redirect_to project_customers_path(@project), notice: 'customer was successfully updated.' }
          flash[:success] = 'Your deal has been updated'
          format.xml { head :ok }

          track_activity @customer
        else
          format.html { render action: 'edit' }
          format.xml  { render xml: @customer.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @customer = customer.find_by_id(params[:id])

      redirect_to customers_path if @customer.destroy
    end

    private

    def customer_params
      # To collect data from form, we need to use
      # strong paramaters and whitelist form fields
      params.require(:customer).permit(:company, :first_name, :last_name, :phone_number, :website, :email)
    end
  end
end
