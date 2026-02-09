module Users
  class QuestionnairesController < ApplicationController
    # GET /questionnaires or /questionnaires.json
    def index
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])

      # 2nd you retrieve the contacts thanks to params[:id]
      @questionnaire = @contact.questionnaires.all
    end

    # GET /questionnaires/1 or /questionnaires/1.json
    def show
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the tasks thanks to params[:id]
      @contact = @project.contacts.find(params[:contact_id])

      @questionnaire = @contact.questionnaires.find(params[:id])
  
      respond_to do |format|
        format.html # show.html.erb
        format.xml  { render xml: @questionnaire }
      end
    end

    # GET /questionnaires/new
    def new
      @project = Project.find(params[:project_id])
      @user = User.find(session[:user_id])
      @contact = @project.contacts.find(params[:contact_id])

      @questions = Question.all
      @answers = Answer.all
      @questionnaire = @project.questionnaires.new
      @questions = @questionnaire.questions.build

      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render xml: @questionnaire }
      end  
    end

    # POST /questionnaires or /questionnaires.json
    def create
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])

      @questionnaire = @project.questionnaires.where(project_id: @project, contact_id: @contact, id: @questionnaire)

      respond_to do |format|
          if @questionnaire.create(questionnaire_params)

            flash[:success] = 'Record Saved.'
            format.html { redirect_to project_contact_questionnaires_url(@project), notice: "Questionnaire was successfully created." }
            format.json { render :show, status: :created, location: @questionnaire }  
            # track_activity @questionnaire
          else
            format.html { render :new, status: :unprocessable_entity }
            format.json { render json: @questionnaire.errors, status: :unprocessable_entity }
          end      
      end
    end

    # GET /questionnaires/1/edit
    def edit
      @project = Project.find(params[:project_id])
      @contact = @project.contacts.find(params[:contact_id])

      @questions = Question.all
      @answers = Answer.all
      @questionnaire = @project.questionnaires.find(params[:id])
    end
    
    # PATCH/PUT /questionnaires/1 or /questionnaires/1.json
    def update
      # 1st you retrieve the post thanks to params[:post_id]
      @project = Project.find(params[:project_id])
      # 2nd you retrieve the comment thanks to params[:id]
      @questionnaire = Questionnaire.find(params[:id])

      respond_to do |format|
        if @questionnaire.update(questionnaire_params)
          format.html { redirect_to project_questionnaire_url(@project, @questionnaire), notice: "Questionnaire was successfully updated." }
          format.json { render :show, status: :ok, location: @questionnaire }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @questionnaire.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /questionnaires/1 or /questionnaires/1.json
    def destroy
      @project = Project.find(params[:project_id])
      @questionnaire = Questionnaire.find(params[:id])
    
      redirect_to project_questionnaires_path(@project) if @questionnaire.destroy
    end

    private
      # Only allow a list of trusted parameters through.
      def questionnaire_params
        params.require(:questionnaire).permit(
          :name,
          :project_id,
          :contact_id,
          questions_attributes: [
            :_destroy,
            :id,
            :question_type,
            :name,
            :required,
            answers_attributes: [
              :_destroy,
              :id,
              :name
            ]
          ])
      end
  end
end
