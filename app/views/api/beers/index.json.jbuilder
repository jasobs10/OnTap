json.array! @beers do |beer|
  json.extract! beer, :id, :name, :description, :abv, :ibu, :style
  json.date_added beer.created_at.strftime("%m-%d-%Y")
  json.brewery beer.brewery, :name
  json.checkins beer.checkins.count(:id)
  json.average beer.checkins.average('rating')
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
  json.currentUserWishlist do
    beer.wishlists.where("user_id = ?", current_user.id).each do |wishlist|
      json.set! wishlist.id do
        json.beerName wishlist.beer.name
        json.breweryName wishlist.beer.brewery.name
      end
    end
  end
end
