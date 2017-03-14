class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
      .where(author: current_user)

    render :index
  end

  def create
    @tag = Tag.find_or_create_by(name: params[:tag_name], author: current_user)

    if params[:note_id]
      tagging = Tagging.new(tag: @tag, note_id: params[:note_id])

      if tagging.save
        render :show
      else
        render json: tagging.errors.full_messages, status: 422
      end
    else
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
