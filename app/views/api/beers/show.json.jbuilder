json.set! @beer.id do
  json.extract! @beer, :id, :name, :description, :abv, :ibu, :style
  json.date_added @beer.created_at.strftime("%m-%d-%Y")
  json.image_url @beer.image.url
  json.brewery @beer.brewery, :name, :id
  json.checkins @beer.checkins.count(:id)

  average = @beer.checkins.average('rating')

  if average
    json.average average
  else
    json.average 0
  end
  json.allStyles do
    json.array! @styles
  end

  json.currentUserWishlist @beer.wishlists.select('id').where("user_id = ?", current_user.id).first
  json.set! @beer.style do
    json.extract! @beer, :id
  end
end
