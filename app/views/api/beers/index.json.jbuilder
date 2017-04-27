
@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :id, :name, :description, :abv, :ibu, :style
    json.image_url beer.image.url
    json.date_added beer.created_at.strftime("%m-%d-%Y")
    json.brewery beer.brewery, :name, :id
    json.checkins beer.checkins.count(:id)
    json.average beer.checkins.average('rating').round(2)
    json.allStyles do
      json.array! @styles
    end
    # json.checkins beer.checkins do |checkin|
    #   json.set! json.rating checkin.rating
    # end
    # json.currentUserWishlist beer.wishlists.where("user_id = ?", current_user.id)
    # beer.wishlists.where("user_id = ?", current_user.id).each do |wishlist|
    #   json.set! wishlist.id do
    #     json.beerName wishlist.beer, :name
    #     json.breweryName wishlist.beer.brewery, :name
    #   end
    # end
    # json.currentUserWishlist do
    #   beer.wishlists.where("user_id = ?", current_user.id).each do |wishlist|
    #     json.set! wishlist.id do
    #       json.beerName wishlist.beer.name
    #       json.breweryName wishlist.beer.brewery.name
    #     end
    #   end
    # end
    json.currentUserWishlist beer.wishlists.select('id').where("user_id = ?", current_user.id).first
    json.set! beer.style do
      json.extract! beer, :id
    end

  end


end
#
# json.styles do
#   json.array! @beers.map(&:style).uniq
# end
