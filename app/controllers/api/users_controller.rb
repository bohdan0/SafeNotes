class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      @user.first_set_up
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    # For reseting guest profile
    key = params[:id]
    user = User.reset_guest(key)

    if user
      render json: ['Guest was reset'], status: 200
    else
      render json: ['Not valid key'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
