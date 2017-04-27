class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      #add in full_messages
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    # debugger
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render :root
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :f_name, :l_name, :city, :state, :country, :about, :avatar)
  end

end
