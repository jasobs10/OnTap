class Api::ToastsController < ApplicationController
  before_action :require_logged_in

  def create
    @toast = Toast.new(toast_params)
    @toast.user_id = current_user.id
    @user = @toast.user
    # debugger
    if @toast.save
      render 'api/toasts/show'
    else
      render json: {base: ["You cannot toast this beer"]}, status: 404
    end
  end

  def destroy
    @toast = Toast.find(params[:id])
    @toast.destroy
    render json: @toast
  end

  def show
    @toast = Toast.find(params[:id])
  end

  private

  def toast_params
    # debugger
    params.require(:toast).permit(:user_id, :checkin_id)
  end
end
