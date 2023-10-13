# frozen_string_literal: true

module Users
  class AddressesController < ApplicationController
    def index
      
    end

    def show 
    
    end 

    def edit 
      
    end

    def update
    
    end
    
    def new
      @project = Project.find(params[:project_id])
      @contact = Contact.find(params[:contact_id])

      @address = Project.find(params[:project_id]).contacts.find(params[:contact_id]).build_address

      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render xml: @address }
      end
    end

    def create 
      @project = Project.find(params[:project_id])
      @contact = Contact.find(params[:contact_id])
      
      @address = Project.find(params[:project_id]).contacts.find(params[:contact_id]).create_address(address_params)

      if @address.save
        flash[:success] = 'Record Saved.'
        redirect_to project_contact_path(@project, @contact)
      end
    end

    private
    def address_params
      # To collect data from form, we need to use
      # strong paramaters and whitelist form fields
      params.require(:address).permit(:street_address, :address_line_two, :city, :state, :zipcode, :contact_id, :project_id)
    end
  end
end
