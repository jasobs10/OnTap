json.array! @breweries do |brewery|
  json.extract! brewery, :id, :name, :country

  json.beers brewery.beers, :id
  # json.beers do
  #   json.array! brewery.beers
  # end
end

# json.beers do
  # json.array! @breweries.beers do |beer|
  #   json.exract! beer, :id
  # end
# end
