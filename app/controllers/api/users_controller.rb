class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render :root
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 404

    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :f_name, :l_name, :city, :state, :country, :about, :avatar)
  end

end
