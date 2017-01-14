class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.all
      .where(author: current_user)

    render '/api/notebooks/index'
  end

  def show
    @notebook = Notebook.find(params[:id])

    if @notebook.author == current_user
      render '/api/notebooks/show'
    else
      render json: ['Access Denied'], status: 422
    end
  end

  def create
    @notebook = Notebook.new(notebook_params)

    if @notebook.save
      render '/api/notebooks/show'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    @notebook.destroy

    render '/api/notebooks/show'
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :author_id)
  end
end
