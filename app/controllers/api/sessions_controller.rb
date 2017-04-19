class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: { base: ["Invalid username/password"] }, status: 404
    end
  end

  def destroy
    @user = current_user
    if current_user
      log_out
      render 'api/users/show'
    else
      render json: { base: ["Can't log out when not logged in"] }, status: 404
    end
  end
end
