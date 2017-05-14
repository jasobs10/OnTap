class Api::BreweryLikesController < ApplicationController
  before_action :require_logged_in
  def create
    @brewery_like_user = current_user
    @brewery_like = BreweryLike.new(brewery_like_params)
    @brewery_like.user_id = current_user.id
    if @brewery_like.save
      render json: @brewery_like
    else
      render json: {base: ["You cannot like this brewery"]}, status: 404
    end
  end

  def destroy
    @brewery_like = BreweryLike.find(params[:id])
    if current_user.id == @brewery_like.user_id
      @brewery_like.destroy
      render json: @brewery_like
    else
      render json: {base: ["You cannot delete this item"]}, status: 404
    end
  end

  private
  def brewery_like_params
    params.require(:brewery_like).permit(:brewery_id)
  end
end
