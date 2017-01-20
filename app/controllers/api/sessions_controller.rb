class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username],
                                     user_params[:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render 'api/users/show'
    else
      render json: ['You are not logged in'], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
