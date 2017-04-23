

@breweries.each do |brewery|
  json.set! brewery.id do
    json.extract! brewery, :id, :name, :country, :city, :state
    json.ratings brewery.checkins.count
    json.beers brewery.beers.count
    json.average brewery.checkins.average('rating')
    json.allStates do
      json.array! @states
    end

    # json.beers do
    #   json.array! brewery.beers
    # end
  end
end

# json.beers do
  # json.array! @breweries.beers do |beer|
  #   json.exract! beer, :id
  # end
# end
