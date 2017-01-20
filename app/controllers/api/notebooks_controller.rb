class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.all
      .where(author: current_user)

    render :index
  end

  def show
    @notebook = Notebook.find(params[:id])

    if @notebook && @notebook.author == current_user
      render :show
    else
      render json: ['Not Found'], status: 422
    end
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author = current_user
    
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    @notebook.destroy

    render :show
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
