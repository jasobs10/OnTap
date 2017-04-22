class Api::WishlistsController < ApplicationController
  before_action :require_logged_in

  def create
    # debugger
    @wishlist_user = current_user
    @wishlistbeer = Wishlist.new(wishlist_params)
    @wishlistbeer.user_id = current_user.id
    # debugger
    if @wishlistbeer.save
      render json: @wishlistbeer.id
    else
      render json: {base: ["Can't add to wishlist"]}, status: 404
    end
  end

  def destroy
    # @wishlist_user = current_user
    @wishlistbeer = Wishlist.find(params[:id])
    @wishlistbeer.destroy
    render json: @wishlistbeer.id
  end

  # def show
  #   @wishlist = Wishlist.find(params[:id])
  #
  #   # @user = User.all.last
  #   # @wishlist = Wishlist.find(params[:id])
  # end

  private

  def wishlist_params
    params.require(:wishlist).permit(:beer_id)
  end
end
