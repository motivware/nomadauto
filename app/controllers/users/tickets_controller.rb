# frozen_string_literal: true

module Users
  class TicketsController < UsersController
    before_action :trial_expired?
    helper_method :sort_column, :sort_direction

    def index
      @project = Project.find(params[:project_id])
      authorize @project

      @tickets = @project.tickets.all if Ticket.exists?
      @tickets = @tickets.order("#{sort_column} #{sort_direction}") if params['sort'].present?

      if params[:status] == "Open"
        @tickets = @tickets.where(status: "Open")
      elsif params[:status] == "Pending"
        @tickets = @tickets.where(status: "Pending")
      elsif params[:status] == "On Hold"
        @tickets = @tickets.where(status: "On Hold")
      elsif params[:status] == "Closed"
        @tickets = @tickets.where(status: "Closed")
      elsif params[:assigned_to] == current_user.name
        @tickets = @tickets.where(assigned_to: current_user.name)
      end
    end

    def new
      @project = Project.find(params[:project_id])

      @ticket = @project.tickets.build

      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render xml: @ticket }
      end
    end

    def show
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the tickets thanks to params[:id]
      @ticket = @project.tickets.find(params[:id])
      authorize @ticket

      respond_to do |format|
        format.html # show.html.erb
        format.xml  { render xml: @ticket }
      end
    end

    def edit
      @project = Project.find(params[:project_id])

      @ticket = @project.tickets.find(params[:id])
    end

    def create
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])

      # 2nd you create the workorder with arguments in params[:workorder]
      @ticket = @project.tickets.create(ticket_params)

      if @ticket.save
        subject = params[:ticket][:subject]
        from = params[:ticket][:from]
        assigned_to = params[:ticket][:assigned_to]
        priority = params[:ticket][:priority]
        status = params[:ticket][:status]
        due_date = params[:ticket][:due_date]
				details = params[:ticket][:details]
        flash[:success] = 'Record Saved.'
        redirect_to project_tickets_path(assigned_to: "")

        track_activity @ticket
      else
        redirect_to new_project_ticket_path
      end
    end

    def update
      # 1st you retrieve the post thanks to params[:post_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the comment thanks to params[:id]
      @ticket = Ticket.find(params[:id])

      respond_to do |format|
        if @ticket.update(ticket_params)
          # 1st argument of redirect_to is an array, in order to build the correct route to the nested resource comment
          format.html { redirect_to project_tickets_path(@project, assigned_to: ""), notice: 'ticket was successfully updated.' }
          flash[:success] = 'Your ticket has been updated'
          format.xml { head :ok }

          track_activity @ticket
        else
          format.html { render action: 'edit' }
          format.xml  { render xml: @ticket.errors, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      @ticket = Ticket.find(params[:id])

      redirect_to project_tickets_path if @ticket.destroy
    end


    def import
      user = User.find(session[:user_id])
      count = user.tickets.import params[:file]
      redirect_to project_tickets_path, notice: "Imported #{count}"
    end

    def sort_column
      @tickets.column_names.include?(params[:sort]) ? params[:sort] : "subject"
    end
    
    def sort_direction
      %w[asc desc].include?(params[:direction]) ?  params[:direction] : "asc"
    end

    private

    def ticket_params
      # To collect data from form, we need to use
      # strong paramaters and whitelist form fields
      params.require(:ticket).permit(:subject, :from, :assigned_to, :priority, :status, :due_date, :details, :project_id)
    end
  end
end
