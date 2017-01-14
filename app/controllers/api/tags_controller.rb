class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
      .where(author: current_user)

    render '/api/tags/index'
  end

  def create
    tag = Tag.find_by_name(params[:tag_name])
    tag = Tag.create(name: params[:tag_name], author_id: current_user.id) unless tag
    note = Note.find(params[:note_id])
    @tagging = Tagging.create(tag, note)
  end

  def destroy
    tag = Tag.find_by_name(params[:tag_name])
    taggings = Tagging.all
      .where(note_id: params[:note_id], tag: tag)

    taggings.map(&:destroy)
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :author_id)
  end
end
