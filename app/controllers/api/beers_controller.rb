class Api::BeersController < ApplicationController
  before_action :require_logged_in

  def index

    @styles = Beer.includes(:brewery, :checkins).all.map(&:style).uniq.sort
    fetch_beers = Beer.includes(:brewery, :checkins)

    if params[:type] == "id" || params[:type] == nil || params[:sort] == "id"
      @beers = fetch_beers
    elsif params[:type] == "style"
      @beers = fetch_beers.where("style = ?", params[:sort])
    elsif params[:type] == "rating"
      avg_max = params[:sort].to_i.to_f + 0.99
      avg = params[:sort].to_f

      @beers = fetch_beers.select do |beer|
        checkin_average = beer.checkins.average('rating')
        checkin_average && checkin_average.between?(avg, avg_max)
      end

    elsif params[:type] == "name"
      @beers = fetch_beers.select('*').where("name LIKE ?", "#{params[:sort]}%")

    end

  end

  def create
    @beer = Beer.new(beer_params)
    # @beer.brewery_id = params[:id]

    if @beer.save
      render :show
    else
      render json: @beer.errors.full_messages, status: 404
    end
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer.update(beer_params)
      render :show
    else
      render json @beer.errors.full_messages
    end
  end

  def show
    @styles = Beer.all.map(&:style).uniq.sort
    @beer = Beer.find(params[:id])
  end


  private
  def beer_params
    params.require(:beer).permit(:name, :description, :brewery_id, :abv, :ibu, :style, :image)
  end
end
