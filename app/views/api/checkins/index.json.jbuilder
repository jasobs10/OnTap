@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :rating, :address, :review, :container, :created_at, :updated_at
    json.brewery checkin.brewery.name
    json.beer checkin.beer.name
    json.user checkin.user, :f_name, :l_name
  end
end


  #   json.checkins beer.checkins.count(:id)
  #   json.average beer.checkins.average('rating')
  #   json.allStyles do
  #     json.array! @styles
  #   end
  #   # json.checkins beer.checkins do |checkin|
  #   #   json.set! json.rating checkin.rating
  #   # end
  #   # json.currentUserWishlist beer.wishlists.where("user_id = ?", current_user.id)
  #   # beer.wishlists.where("user_id = ?", current_user.id).each do |wishlist|
  #   #   json.set! wishlist.id do
  #   #     json.beerName wishlist.beer, :name
  #   #     json.breweryName wishlist.beer.brewery, :name
  #   #   end
  #   # end
  #   # json.currentUserWishlist do
  #   #   beer.wishlists.where("user_id = ?", current_user.id).each do |wishlist|
  #   #     json.set! wishlist.id do
  #   #       json.beerName wishlist.beer.name
  #   #       json.breweryName wishlist.beer.brewery.name
  #   #     end
  #   #   end
  #   # end
  #   json.currentUserWishlist beer.wishlists.select('id').where("user_id = ?", current_user.id).first
  #   json.set! beer.style do
  #     json.extract! beer, :id
  #   end
  #
  # end
