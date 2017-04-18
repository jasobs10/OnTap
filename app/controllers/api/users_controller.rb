class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      #add in full_messages
      render json: @user.errors, status: 404
    end
  end

  def show
    @user = current_user
    if @user
      render :show
    else
      render :root
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :f_name, :l_name, :city, :state, :country, :about)
  end

end
