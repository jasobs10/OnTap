class Api::CheckinsController < ApplicationController
  before_action :require_logged_in

  def index
    @checkins = Checkin.all.includes(:beer, :brewery)
  end

  def create
    @checkin = Checkin.new(checkin_params)
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
