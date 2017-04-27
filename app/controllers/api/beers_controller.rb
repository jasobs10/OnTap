class Api::BeersController < ApplicationController
  before_action :require_logged_in

  def index
    # DO sort and indexing in here, pass in params
    #
    @styles = Beer.all.map(&:style).uniq.sort
    fetch_beers = Beer.includes(:brewery, :checkins)
    if params[:type] == "id" || params[:type] == nil || params[:sort] == "id"
      @beers = fetch_beers.all.sort { |a,b| b.checkins.average('rating') <=> a.checkins.average('rating')}
    elsif params[:type] == "style"
      @beers = fetch_beers.where("style = ?", params[:sort])
      #
    elsif params[:type] == "rating"
      avg_max = params[:sort].to_i.to_f + 0.99
      avg = params[:sort].to_f
      #
      # @beers = <<-SQL
      #   SELECT AVG(rating), beers.id FROM checkins JOIN beers ON checkins.beer_id = beers.id GROUP BY beers.id HAVING AVG(rating) BETWEEN 3 AND 4 - .1
      # SQL
      @beers = fetch_beers.select {|beer| beer.checkins.average('rating').between?(avg, avg_max)}
    elsif params[:type] == "name"
      @beers = fetch_beers.select('*').where("name LIKE ?", "#{params[:sort]}%")

    end
    #

  end

  def create
    @beer = Beer.new(beer_params)
    @beer.brewery_id = params[:id]

    if @beer.save
      render :show
    elseshow
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
    #
    @beer = Beer.find(params[:id])
  end


  private
  def beer_params
    params.require(:beer).permit(:name, :description, :brewery_id, :abv, :ibu, :style)
  end
end
