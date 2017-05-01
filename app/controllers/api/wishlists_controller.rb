class Api::WishlistsController < ApplicationController
  before_action :require_logged_in

  def create
    @wishlist_user = current_user
    @wishlistbeer = Wishlist.new(wishlist_params)
    @wishlistbeer.user_id = current_user.id
    if @wishlistbeer.save
      render json: @wishlistbeer
    else
      render json: {base: ["Can't add to wishlist"]}, status: 404
    end
  end

  def destroy
    @wishlistbeer = Wishlist.find(params[:id])
    @wishlistbeer.destroy
    render json: @wishlistbeer
  end

  private

  def wishlist_params
    params.require(:wishlist).permit(:beer_id)
  end
end
