@breweries.each do |brewery|
  json.set! brewery.name, brewery.id
end
