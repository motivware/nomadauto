module Users
  class ConversationsController < UsersController
    before_action :set_conversation, only: %i[show edit update destroy ]

    # GET /conversations or /conversations.json
    def index
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])

      # authorize @project
      @user = User.find(session[:user_id])
      @conversation = @contact.conversations.all
    end

    # GET /conversations/1 or /conversations/1.json
    def show
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])
      @conversation = @contact.conversations.find(params[:id])
      @posts = @conversation.posts
      
        respond_to do |format|
          format.html # show.html.erb
          format.xml  { render xml: @conversation }
        end
    end

    # GET /conversations/new
    def new
      @project = Project.find(params[:project_id])
      @user = User.find(session[:user_id])
      @contact = @project.contacts.find(params[:contact_id])

      @conversation = @project.conversations.build

      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render xml: @conversation }
      end  
    end

    # GET /conversations/1/edit
    def edit
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])

      @conversation = @contact.conversations.find(params[:id])
    end

    # POST /conversations or /conversations.json
    def create
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])
      @user = User.find(session[:user_id])

      # 2nd you create the workorder with arguments in params[:workorder]
      @conversation = @project.conversations.where(project_id: @project, contact_id: @contact, id: @conversation)

      respond_to do |format|
        if @conversation.create(conversation_params)
          subject = params[:conversation][:subject]
          contact_id = params[:conversation][:contact_id]
          project_id = params[:conversation][:project_id]
          format.html { redirect_to project_contact_conversations_path(@project, @contact), notice: "Conversation was successfully created." }
          format.json { render :show, status: :created, location: @conversation }  
          # track_activity @conversation
        else
          redirect_to new_project_contact_conversation_path(@project, @contact)
        end
      end
    end

    # PATCH/PUT /conversations/1 or /conversations/1.json
    def update
      # 1st you retrieve the post thanks to params[:post_id]
      @project = Project.find(params[:project_id])
      @contact = Contact.find(params[:contact_id])

      # 2nd you retrieve the comment thanks to params[:id]
      @conversation = Conversation.find(params[:id])

      respond_to do |format|
        if @conversation.update(conversation_params)
          format.html { redirect_to project_contact_conversation_url(@project, @contact, @conversation), notice: "Conversation was successfully updated." }
          format.json { render :show, status: :ok, location: @conversation }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @conversation.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /conversations/1 or /conversations/1.json
    def destroy
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])

      @conversation = @contact.conversations.find(params[:id])

      redirect_to project_contact_conversations_path(@project, @contact) if @conversation.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_conversation
        @project = Project.find(params[:project_id])
        @contact = @project.contacts.find(params[:contact_id])
        @conversation = @contact.conversations.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def conversation_params
        params.require(:conversation).permit(:subject, :contact_id, :project_id)
      end
  end
end
