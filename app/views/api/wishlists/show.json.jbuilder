# @wishlist.beer do |beer|
#   json.set! beer.id do
#     json.extract! beer, :id, :name
#     json.brewery beer.brewery, :name
#   end
# end
#
# @wishlist_user.wishlist_beers do |beer|
#   json.set! beer.id do
#     json.extract! beer, :id, :name
#     json.brewery beer.brewery, :name
#   end
# end
# @user.wishlist_beers do |beer|
#   json.set! beer.id do
#     json.extract! beer, :id, :name
#     json.brewery beer.brewery, :name
#   end
# end

# json.array! @user.wishlist_beers do |beer|
#   json.extract! beer, :id, :name
#   json.brewery beer.brewery.name
# end

@wishlist.extract! wishlist, :id, :user_id, :beer_id
