class Api::BreweriesController < ApplicationController
  before_action :require_logged_in
  def index
    @states = Brewery.all.map(&:state).uniq.sort
    fetch_breweries = Brewery.includes(:beers, :checkins)


    if params[:type] == "id" || params[:type] == nil || params[:sort] == "id"
      @breweries = fetch_breweries.all
    elsif params[:type] == "state"
      @breweries = fetch_breweries.where("state = ?", params[:sort])
      # debugger
    elsif params[:type] == "rating"
      avg_max = params[:sort].to_i.to_f + 0.99
      avg = params[:sort].to_f
      @breweries = fetch_breweries.select {|brewery| brewery.checkins.average('rating').between?(avg, avg_max)}
    elsif params[:type] == "name"
      @breweries = fetch_breweries.select('*').where("name LIKE ?", "#{params[:sort]}%")
      # debugger
    end
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

  def show
    @brewery = Brewery.find(params[:id])

  end

  private
  def brewery_params
    params.require(:brewery).permit(:name, :type, :country, :city, :state, :fb, :ig, :twitter, :website, :image)
  end

end
