class ArticlesController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @articles = Project.find(params[:project_id]).articles.all if Article.exists?
    @collections = @project.collections.all if Collection.exists?
  end

  def show 
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:collection_id])
    @article = Project.find(params[:project_id]).collections.find(params[:collection_id]).articles.find(params[:id])
    
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render xml: @article }
    end
  end 

  def edit 
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:collection_id])
    @article = @project.collections.find(params[:collection_id]).articles.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render xml: @article }
    end
  end

  def update
    @project = Project.find(params[:project_id])
    @collection = Collection.find(params[:collection_id])
    @article = @project.collections.find(params[:collection_id]).articles.find(params[:id])

    respond_to do |format|
      if @article.update(article_params)
        # 1st argument of redirect_to is an array, in order to build the correct route to the nested resource comment
        format.html { redirect_to project_collection_article_path(@project, @collection, @article), notice: 'article was successfully updated.' }
        flash[:success] = 'Your article has been updated'
        format.xml { head :ok }
      else
        format.html { render action: 'edit' }
        format.xml  { render xml: @article.errors, status: :unprocessable_entity }
      end
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
