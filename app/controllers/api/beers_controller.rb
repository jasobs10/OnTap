class Api::BeersController < ApplicationController
  before_action :require_logged_in

  def index
    @beers = Beer.all
    render json: @beers
  end

  def create
    @beer = Beer.new(beer_params)
    @beer.brewery_id = params[:id]

    if @beer.save
      render json: @beer
    elseshow
      render json: @beer.errors.full_messages, status: 404
    end
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer.update(beer_params)
      render json: @beer
    else
      render json @beer.errors.full_messages
    end
  end

  def show
    @beer = Beer.find(params[:id])
    render json: @beer
  end


  private
  def beer_params
    params.require(:beer).permit(:name, :description, :brewery_id, :abv, :ibu, :style)
  end
end
