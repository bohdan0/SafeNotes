class Api::NotesController < ApplicationController
  def index
    if params['notebook_id']
      @notes = Note.all
        .where('notebook_id = ?', params['notebook_id'])
        .where('author_id = ?', current_user.id)
    else
      @notes = Note.all
        .where('author_id = ?', current_user.id)
    end

    render '/api/notes/index'
  end

  def show
    @note = Note.find(params[:id])

    if @note.author == current_user
      render '/api/notes/show'
    else
      render json: ['Access Denied'], status: 422
    end
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render '/api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end
  
  def update
    @note = Note.find(params[:id])

    if @note.update(note_params)
      render 'api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy

    render 'api/notes/show'
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end
