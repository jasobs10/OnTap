class Api::BreweriesController < ApplicationController
  before_action :require_logged_in
  def index
    @states = Brewery.all.map(&:state).uniq.sort
    fetch_breweries = Brewery.includes(:beers, :checkins)


    if params[:type] == "id" || params[:type] == nil || params[:sort] == "id"
      @breweries = fetch_breweries.all
    elsif params[:type] == "state"
      @breweries = fetch_breweries.where("state = ?", params[:sort])
    elsif params[:type] == "rating"
      avg_max = params[:sort].to_i.to_f + 0.99
      avg = params[:sort].to_f
      @breweries = fetch_breweries.select do |brewery|
        checkin_average = brewery.checkins.average('rating')
        checkin_average && checkin_average.between?(avg, avg_max)
      end
    elsif params[:type] == "name"
      uppercase = params[:sort].upcase
      lowercase = params[:sort].downcase
      @breweries = fetch_breweries.where("name LIKE ?", "#{uppercase}%").or(fetch_breweries.where("name LIKE ?", "#{lowercase}%"))
    end
  end

  def create
    @brewery = Brewery.new(brewery_params)
    if @brewery.save

      @states = Brewery.all.map(&:state).uniq.sort
      render :show
    else
      render json: @brewery.errors.full_messages, status: 404
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

  def fetch
    @breweries = Brewery.all
    render :fetch
  end

  def show
    @brewery = Brewery.find(params[:id])

  end

  private
  def brewery_params
    params.require(:brewery).permit(:name, :type, :country, :city, :state, :fb, :ig, :twitter, :website, :image)
  end

end
