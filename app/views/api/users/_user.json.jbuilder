json.extract! user, :id, :username, :f_name, :l_name, :about, :city, :state, :country
json.wishlistBeers do
  user.wishlist_beers.each do |beer|
    json.set! beer.id do
      json.id beer.id
      json.name beer.name
      json.brewery beer.brewery.name
    end
    # json.array! beer,
  end
end
json.image_url user.avatar.url
json.likedBreweries do
  user.liked_breweries.each do |like|
    json.set! like.id do
      json.id like.id
      json.name like.name
    end
  end
end
    # json.array! user.wishlist_beers do |beer|
    #   json.name beer.name
    #   json.brewery beer.brewery.name
    #   json.id beer.id
    #
    # end
