class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
      .where(author: current_user)

    render :index
  end

  def create
    if params[:note_id]
      @tag = Tag.find_by_name(params[:tag_name]) ||
        Tag.create(name: params[:tag_name], author: current_user)
      
      Tagging.create(tag: @tag, note_id: params[:note_id])

      render :show
    else
      @tag = Tag.find_by_name(params[:tag_name]) ||
        Tag.create(name: params[:tag_name], author: current_user)

      render :show
    end
  end

  def destroy
    if params[:note_id]
      @tag = Tag.find_by_name(params[:id])
      taggings = Tagging.all
        .where(note_id: params[:note_id], tag: @tag)

      taggings.map(&:destroy)

      render :show
    else
      @tag = Tag.find(params[:id])
      @tag.destroy
      render :show
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:id, :tag_name)
  end
end
