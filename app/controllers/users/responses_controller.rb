module Users
  class ResponsesController < ApplicationController
    before_action :set_questionnaire, except: :show
    before_action :set_response, only: %i[ edit update destroy ]

    def index
      # 1st you retrieve the project thanks to params[:project_id]
      @project = Project.find(params[:project_id])
      @contact = Contact.find(params[:contact_id])

      @questions = Question.all
      @answers = Answer.all
      # 2nd you retrieve the contacts thanks to params[:id]
      @questionnaire = @project.questionnaires.find(params[:questionnaire_id])
      @response = @questionnaire.responses.all
    end

    # GET /responses/1 or /responses/1.json
    def show
      @project = Project.find(params[:project_id])
      @contact = Contact.find(params[:contact_id])
      @questions = Question.all
      @answers = Answer.all
      @questionnaire = Questionnaire.includes(questions: :answers).find(params[:questionnaire_id])
      @response = @questionnaire.responses.find(params[:id])
    end

    # GET /responses/new
    def new
      @contact = Contact.find(params[:contact_id])
      @response = @questionnaire.responses.new
    end

    # POST /responses or /responses.json
    def create
      @response = @questionnaire.responses.new(response_params)
      @contact = Contact.find(params[:contact_id])

      respond_to do |format|
        if @response.save
          format.html { redirect_to project_contact_questionnaire_path(@questionnaire.project, @contact, @questionnaire), notice: "Response was successfully created." }
          format.json { render :show, status: :created, location: @response }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @response.errors, status: :unprocessable_entity }
        end
      end
    end


    private
      def set_questionnaire
        @project = Project.find(params[:project_id])
        @questionnaire = @project.questionnaires.find(params[:questionnaire_id])
      end
      # Use callbacks to share common setup or constraints between actions.
      def set_response
        @response = @questionnaire.responses.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def response_params
        params.require(:response).permit(:questionnaire_id, answers: { })
      end
  end
end