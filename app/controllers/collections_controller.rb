class CollectionsController < ApplicationController
  # before_action :trial_expired?

  def show
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:id])
    # @article = Article.find(params[:id])
    if Article.where(project_id: @project) && Article.where(collection: @collection)
      @articles = @collection.articles.all
    end

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render xml: @collection }
    end
  end

  def edit
    @project = Project.find(params[:project_id])
    @collection = @project.collections.find(params[:id])
  end

  def update
    # Retrieve project from the database
    @project = Project.find(params[:project_id])
    # Retrieve that users profile page
    @collection = Collection.find(params[:id])
    if @collection.update(collection_params)
      flash[:success] = 'Collection Updated!'
      # Redirect user to their profile page
      redirect_to project_articles_path(@project, @article)
    else
      render action: :edit
    end
  end

  def new
    @project = Project.find(params[:project_id])
    @collection = @project.collections.build
    authorize @collection

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render xml: @collection }
    end
  end

  def create
    @project = Project.find(params[:project_id])
    @collection = @project.collections.create(collection_params)

    if @collection.save
      title = params[:collection][:subject]
      heading = params[:collection][:heading]
      flash[:success] = 'Record Saved.'
      redirect_to project_articles_path

      track_activity @collection
    else
      redirect_to new_project_collection_path
    end
  end

  private

    def collection_params
      params.require(:collection).permit(:title, :heading, :article_id, :project_id)
    end
end
