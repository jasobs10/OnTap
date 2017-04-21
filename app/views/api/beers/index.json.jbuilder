json.array! @beers do |beer|
  json.extract! beer, :id, :name, :description, :abv, :ibu, :style
  json.date_added beer.created_at.strftime("%m-%d-%Y")
  json.brewery beer.brewery, :name
  json.checkins beer.checkins.count(:id)
  json.average beer.checkins.average('rating')
  # json.checkins beer.checkins do |checkin|
  #   json.set! json.rating checkin.rating
  # end
end
