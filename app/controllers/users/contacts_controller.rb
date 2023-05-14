# frozen_string_literal: true

module Users
  class ContactsController < UsersController
    before_action :trial_expired?

    def index
      @project = Project.find(params[:project_id])
      authorize @project

      @contacts = @project.contacts.all if Contact.exists?
    end

    def new
      @project = Project.find(params[:project_id])

      @contact = @project.contacts.build
      authorize @contact

      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render xml: @contact }
      end
    end

    def show
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the contacts thanks to params[:id]
      @contact = @project.contacts.find(params[:id])
      # authorize @contact

      respond_to do |format|
        format.html # show.html.erb
        format.xml  { render xml: @contact }
      end
    end

    def edit
      @project = Project.find(params[:project_id])

      @contact = @project.contacts.find(params[:id])
    end

    def create
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])

      # 2nd you create the workorder with arguments in params[:workorder]
      @contact = @project.contacts.create(contact_params)

      if @contact.save
        company = params[:contact][:contact]
        first_name = params[:contact][:first_name]
        last_name = params[:contact][:last_name]
        phone_number = params[:contact][:phone_number]
        website = params[:contact][:website]
        email = params[:contact][:email]
        flash[:success] = 'Record Saved.'
        redirect_to project_contacts_path

        track_activity @contact
      else
        redirect_to new_project_contact_path
      end
    end

    def update
      # 1st you retrieve the post thanks to params[:post_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the comment thanks to params[:id]
      @contact = Contact.find(params[:id])

      respond_to do |format|
        if @contact.update(contact_params)
          # 1st argument of redirect_to is an array, in order to build the correct route to the nested resource comment
          format.html { redirect_to project_contacts_path(@project), notice: 'contact was successfully updated.' }
          format.xml { head :ok }

          track_activity @contact
        else
          format.html { render action: 'edit' }
          format.xml  { render xml: @contact.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @contact = Contact.find(params[:id])

      redirect_to project_contacts_path if @contact.destroy
    end


    def import
      user = User.find(session[:user_id])
      count = user.contacts.import params[:file]
      redirect_to project_contacts_path, notice: "Imported #{count} users"
    end

    private

    def contact_params
      # To collect data from form, we need to use
      # strong paramaters and whitelist form fields
      params.require(:contact).permit(:company, :first_name, :last_name, :phone_number, :website, :email)
    end
  end
end
