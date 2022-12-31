class ArticlesController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @articles = Project.find(params[:project_id]).articles.all if Article.exists?
    @collections = @project.collections.all if Collection.exists?
  end

  def show 
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:collection_id])
    @article = @collection.articles.find(params[:id])
  end 

  def edit 
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:collection_id])
    @article = Project.find(params[:project_id]).collections.find(params[:collection_id]).articles.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render xml: @article }
    end
  end
  
  def new
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:collection_id])

    @article = Project.find(params[:project_id]).collections.find(params[:collection_id]).articles.build

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render xml: @article }
    end
  end

  def create 
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:collection_id])
    @article = Project.find(params[:project_id]).collections.find(params[:collection_id]).articles.create(article_params)

    if @article.save
      flash[:success] = 'Record Saved.'
      redirect_to project_collection_path(@project, @collection)
    end
  end

  private
  def article_params
    # To collect data from form, we need to use
    # strong paramaters and whitelist form fields
    params.require(:article).permit(:subject, :author, :content, :collection_id, :project_id)
  end
end
