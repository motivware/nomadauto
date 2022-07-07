# frozen_string_literal: true

class CustomerContactsController < ApplicationController

  # GET request to /contact-us
  # Show new contact form
  def new
    @customer_contacts = CustomerContact.new
  end

  # POST request /contacts
  def create
    # Mass assignment of form fields into Contact object
    @customer_contact = CustomerContact.new(customer_contacts_params)
    # Save the contact object to the database
    if verify_recaptcha(model: @customer) && @customer_contact.save
      # Store form fields via paramaters, into variables
      name = params[:customer_contact][:name]
      email = params[:customer_contact][:email]
      body = params[:customer_contact][:comments]
      # Plug variables into Contact Mailer
      # email method and send email
      ContactMailer.contact_email(name, email, body).deliver
      # Store success message in flash hash
      # and redirect to the new action
      flash[:success] = 'Message sent.'
    else
      # If contact object doesn't save
      # store erros in flash hash
      # and redirect to new action
      flash[:danger] = @customer_contact.errors.full_messages.join(', ')
    end
    redirect_to new_contact_path
  end

  private

  def customer_contacts_params
    # To collect data from form, we need to use
    # strong paramaters and whitelist form fields
    params.require(:customer_contact).permit(:name, :email, :comments)
  end
end
