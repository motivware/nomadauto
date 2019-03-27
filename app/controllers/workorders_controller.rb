class WorkordersController < UsersController
  before_action :trial_expired?
  skip_before_filter :verify_authenticity_token, only: [:index, :show]

  def index
    @project = Project.find(params[:project_id])
    authorize @project
    user = User.all
    if Workorder.where(project_id: @project)
      @workorders = @project.workorders.all

      @workorders = @project.workorders.where(status: params["status"]) if params["status"].present?
      @workorders = @project.workorders.where(priority: params["priority"]) if params["priority"].present?
      @workorders = @project.workorders.where(user: params["user"]) if params["user"].present?

      @workorders = @project.workorders.order(sort_column + ' ' + sort_direction) if params["sort"].present?
    end
  end

  def show
    #1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])
    #2nd you retrieve the workorders thanks to params[:id]
    #@workorder = project.workorders.find(params[:id])
    #@workorder = @project.workorders.find_by!(permalink: params[:id])
    @workorder = @project.workorders.find(params[:id])
    #authorize @workorder

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @workorder }
    end

  end

  def new
    #1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])

    #2nd you get all the workorders of this project
    @workorder = @project.workorders.build
    authorize @workorder

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @workorder }
    end
    #@workorder = workorder.new
  end

  def create
    #1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])

    #2nd you create the workorder with arguments in params[:workorder]
    @workorder = @project.workorders.create(workorder_params)


    respond_to do |format|
      if @workorder.save
        #1st argument of redirect_to is an array, in order to build the correct route to the nested resource workorder
        format.html { redirect_to project_workorders_path(@project), :notice => 'workorder was successfully created.' }
        #the key :location is associated to an array in order to build the correct route to the nested resource workorder
        format.xml  { render :xml => @workorder, :status => :created, :location => [@workorder.project, @workorder] }

        track_activity @workorder

      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @workorder.errors, :status => :unprocessable_entity }
      end
    end
    # if @workorder.save
    #   # Store form fields via paramaters, into variables
    #   title = params[:workorder][:title]
    #   description = params[:workorder][:description]
    #   status = params[:workorder][:status]
    #   priority = params[:workorder][:priority]
    #   flash[:success] = "Record Saved."

    #   redirect_to project_workorders_path
    # else
    #   redirect_to project_workorders_path
    # end
  end

  def edit
    @project = Project.find(params[:project_id])

    @workorder = @project.workorders.find(params[:id])
  end

  def update
    #1st you retrieve the post thanks to params[:post_id]
    @project = Project.find(params[:project_id])
    #2nd you retrieve the comment thanks to params[:id]
    @workorder = Workorder.find(params[:id])

    respond_to do |format|
      if @workorder.update_attributes(workorder_params)
        #1st argument of redirect_to is an array, in order to build the correct route to the nested resource comment
        format.html { redirect_to project_workorders_path(@project), :notice => 'workorder was successfully updated.' }
        flash[:success] = "Your workorder has been updated"
        format.xml  { head :ok }
        track_activity @workorder

      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @workorder.errors, :status => :unprocessable_entity }
      end
    end
    # if @workorder.update_attributes(workorder_params)
    #   flash[:success] = "Profile updated"
    #   redirect_to project_workorders_path
    # else
    #   render 'edit'
    # end
  end



  def destroy
    #1st you retrieve the project thanks to params[:project_id]
    @project = Project.find(params[:project_id])
    #2nd you retrieve the workorder thanks to params[:id]
    @workorder = Workorder.find(params[:id])

    if @workorder.destroy
      redirect_to project_workorders_path(@project)
    end
  end

  def import
    user = User.find(session[:user_id])
    count = user.workorders.import params[:file]
    redirect_to project_workorders_path, notice: "Imported #{count} users"
  end

  private

  def workorder_params
    params.require(:workorder).permit(:title, :description, :status, :priority, :owner, :miles, :time, :project_id, :user_id)
  end

  def sort_column
    params[:sort] || "title"
  end

  def sort_direction
    params[:direction] || "asc"
  end
end
