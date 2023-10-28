# frozen_string_literal: true

module Users
  class ContactsController < UsersController
    before_action :trial_expired?
    helper_method :sort_column, :sort_direction

    def index
      @project = Project.find(params[:project_id])
      authorize @project
      @user = User.find(session[:user_id])
      @questionnaire = @project.questionnaires.all

      if @user.plan_id == 2 ||  @user.plan_id == 1
        @contacts = @project.contacts.all if Contact.exists?
        @contacts = @contacts.order("#{sort_column} #{sort_direction}") if params['sort'].present?

        if params[:status] == "Lead"
          @contacts = @contacts.where(status: "Lead")
        elsif params[:status] == "Prospect"
          @contacts = @contacts.where(status: "Prospect")
        elsif params[:status] == "Athlete"
          @contacts = @contacts.where(status: "Athlete")
        elsif params[:status] == "Completed"
          @contacts = @contacts.where(status: "Completed")
        end

      else @user.plan_id == 3
        @contacts = @user.contacts.all if Contact.exists?
        @contacts = @contacts.order("#{sort_column} #{sort_direction}") if params['sort'].present?

        if params[:status] == "Leads"
          @contacts = @contacts.where(status: "Leads")
        elsif params[:status] == "Prospects"
          @contacts = @contacts.where(status: "Prospects")
        elsif params[:status] == "Athletes"
          @contacts = @contacts.where(status: "Athletes")
        elsif params[:status] == "Completed"
          @contacts = @contacts.where(status: "Completed")
        end
      end

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

      if Questionnaire.where(project_id: @project) && Questionnaire.where(contact: @contact)
        @questionnaires = @contact.questionnaires.all
        @questions = Question.all
        @answers = Answer.all
        @questionnaire = @project.questionnaires.new
        @questions = @questionnaire.questions.build
      end

      # authorize @contact
      if Address.where(contact: @contact) 
        @address = @contact.address
      end
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
        first_name = params[:contact][:first_name]
        last_name = params[:contact][:last_name]
        phone_number = params[:contact][:phone_number]
        email = params[:contact][:email]
        status = params[:contact][:status]
        start_date= params[:contact][:start_date]
        end_date = params[:contact][:end_date]
        pay_rate = params[:contact][:pay_rate]
        waiver = params[:contact][:waiver]
        intake_form = params[:contact][:intake_form]
        contract = params[:contact][:contract]
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

    def sort_column
      params[:sort] || 'title'
    end
  
    def sort_direction
      params[:direction] || 'asc'
    end

    private

    def contact_params
      # To collect data from form, we need to use
      # strong paramaters and whitelist form fields
      params.require(:contact).permit(:first_name, :last_name, :phone_number, :email, :status, :start_date, :end_date, :pay_rate, :notes, :user_id, :waiver, :intake_form, :contract)
    end
  end
end
