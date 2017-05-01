json.set! @brewery.id do
  json.extract! @brewery, :id, :name, :country, :city, :state
  json.ratings @brewery.checkins.count
  json.beers @brewery.beers.count

  average = @brewery.checkins.average('rating')

  if average
    json.average average
  else
    json.average 0
  end
  json.image_url @brewery.image.url
  json.likers do
    @brewery.brewery_likers.each do |liker|
      json.set! liker.id do
        json.id liker.id
        json.f_name liker.f_name
        json.l_name liker.l_name
        json.username liker.username
      end
    end
  end
  
  json.currentUserLikes @brewery.brewery_likes.select('id').where("user_id = ?", current_user.id).first
end
