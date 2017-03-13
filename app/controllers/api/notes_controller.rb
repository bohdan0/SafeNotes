class Api::NotesController < ApplicationController
  def index
    if params[:note]
      @notes = Note
        .where(author: current_user, notebook_id: note_params[:notebook_id])
        .includes(:tags)
    else
      @notes = Note
        .where(author: current_user)
        .includes(:tags)
    end

    render :index
  end

  def show
    @note = Note.find(params[:id])

    if @note && @note.author == current_user
      render :show
    else
      render json: ['Not Found'], status: 404
    end
  end

  def create
    @note = Note.new(note_params)
    @note.author = current_user

    if @note.save
      (params[:note][:tag_ids] || []).each do |tag_id| 
        Tagging.create(tag_id: tag_id, note: @note) 
      end

      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end
  
  def update
    @note = Note.find(params[:id])

    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy

    render :show
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
