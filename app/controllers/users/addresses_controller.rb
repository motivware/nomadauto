# frozen_string_literal: true

module Users
  class AddressesController < ApplicationController
    def new
      @project = Project.find(params[:project_id])
      @contact = Contact.find(params[:contact_id])
      @address = @contact.build_address
    end

    def create
      @project = Project.find(params[:project_id])
      @contact = Contact.find(params[:contact_id])
      @address = @contact.create_address(address_params)

      if @address.save
        flash[:success] = 'Record Saved.'
        redirect_to project_contact_path(@project, @contact)
      end
    end

    private

    def address_params
      params.require(:address).permit(:street_address, :address_line_two, :city, :state, :zipcode, :contact_id, :project_id)
    end
  end
end
