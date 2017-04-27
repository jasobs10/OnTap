class Api::CheckinsController < ApplicationController
  before_action :require_logged_in

  def index
    # debugger

    id = params[:beer_id].to_i
    if params[:beer_id]
      # debugger
      @checkins = Checkin.includes(:beer, :user, :comments, :toasts, :toast_users).where("beer_id = ?", id)
      # debugger
    elsif params[:brewery_id]
      @checkins = Brewery.includes(:checkins).find(params[:brewery_id]).checkins
    elsif params[:user_id]
      @checkins = User.includes(:checkins).find(params[:user_id]).checkins
    else
      @checkins = Checkin.all.includes(:beer, :brewery, :comments, :toasts, :toast_users)
    end
  end

  def create
    @checkin = Checkin.new(checkin_params)
    @checkin.user_id = current_user.id
    if @checkin.save
      render :show
    else
      render json: {base: ["You cannot checkin this beer"]}
    end
  end

  def update

  end

  def destroy

  end

  private
  def checkin_params
    params.require(:checkin).permit(:user_id, :beer_id, :venue_id, :rating, :address, :review, :container)
  end
end
