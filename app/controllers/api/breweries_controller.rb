class Api::BreweriesController < ApplicationController
  before_action :require_logged_in
  def index
    @breweries = Brewery.includes(:beers).all
  end

  def create
    @brewery = Brewery.new
    if @brewery.save
      render :show
    else
      render json: @brewery.errors.full_messages
    end
  end

  def update
    @brewery = Brewery.find(params[:id])
    if @brewery.update(brewery_params)
      render :show
    else
      render json: @brewery.errors.full_messages
    end

  end

  private
  def brewery_params
    params.require(:brewery).permit(:name, :type, :country, :city, :state, :fb, :ig, :twitter, :website)
  end

end
