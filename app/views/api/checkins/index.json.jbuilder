@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :rating, :address, :review, :container, :created_at, :updated_at, :address
    json.image_url checkin.image.url
    json.brewery checkin.brewery.name

    json.brewery_id checkin.brewery.id
    json.beer checkin.beer.name
    json.user checkin.user, :f_name, :l_name, :id
    json.user_image_url checkin.user.avatar.url
    json.beer_id checkin.beer_id
    json.beer_image_url checkin.beer.image.url
    json.toastUsers do
      checkin.toast_users.each do |user|
        json.set! user.id do
          json.user_id user.id
          json.f_name user.f_name
          json.l_name user.l_name
          json.image_url user.avatar.url
        end
      end
    end
    json.comments do
      checkin.comments.each do |comment|
        json.set! comment.id do
          json.id comment.id
          json.user_id comment.user_id
          json.checkin_id comment.checkin_id
          json.author_f_name comment.user.f_name
          json.author_l_name comment.user.l_name
          json.created_at comment.created_at
          json.comment comment.comment
          json.checkin_creator comment.checkin.user_id
          json.user_image_url comment.user.avatar.url

        end
      end
    end
    json.currentUserToast current_user.toasts.where("checkin_id = ?", checkin.id).first
  end
end
