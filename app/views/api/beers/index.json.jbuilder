json.array! @beers do |beer|
  json.extract! beer, :id, :name, :description, :abv, :ibu, :style, :created_at
  json.brewery beer.brewery, :name
end
