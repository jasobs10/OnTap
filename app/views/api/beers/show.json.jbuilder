json.set! @beer.id do
  json.extract! @beer, :id, :name, :description, :abv, :ibu, :style
  json.date_added @beer.created_at.strftime("%m-%d-%Y")
  json.brewery @beer.brewery, :name, :id
  json.checkins @beer.checkins.count(:id)
  
  average = @beer.checkins.average('rating')

  if average
    json.average average
    # debugger
  else
    json.average 0
  end
  json.image_url @beer.image.url
  json.allStyles do
    json.array! @styles
  end

  # json.checkins do
  #   @beer.checkins.each do |checkin|
  #     json.set! checkin.id do
  #       json.extract! checkin, :id, :rating, :address, :review, :container, :created_at, :updated_at
  #       json.brewery checkin.brewery.name
  #       json.beer checkin.beer.name
  #       json.user checkin.user, :f_name, :l_name
  #       json.toastUsers do
  #         checkin.toast_users.each do |user|
  #           json.set! user.id do
  #             json.user_id user.id
  #             json.f_name user.f_name
  #             json.l_name user.l_name
  #             # json.userToasts do
  #             #   json.set! user.id do
  #             #     json.array! user.toasts.map(&:id)
  #             #   end
  #             # end
  #             # json.checkinToasts do
  #             #   json.array! user.checkins.toasts
  #             # end
  #           end
  #         end
  #       end
  #       # json.toastCount checkin.toasts.count
  #       json.comments do
  #         checkin.comments.each do |comment|
  #           json.set! comment.id do
  #             json.id comment.id
  #             json.user_id comment.user_id
  #             json.checkin_id comment.checkin_id
  #             json.author_f_name comment.user.f_name
  #             json.author_l_name comment.user.l_name
  #             json.created_at comment.created_at
  #             json.comment comment.comment
  #             json.checkin_creator comment.checkin.user_id
  #             json.user_image_url comment.user.avatar.url
  #
  #           end
  #         end
  #       end
  #       json.currentUserToast current_user.toasts.where("checkin_id = ?", checkin.id).first
  #     end
  #   end
  #
  # end
  # json.checkins beer.checkins do |checkin|
  #   json.set! json.rating checkin.rating
  # end
  # json.currentUserWishlist beer.wishlists.where("user_id = ?", current_user.id)
  # beer.wishlists.where("user_id = ?", current_user.id).each do |wishlist|
  #   json.set! wishlist.id do
  #     json.beerName wishlist.beer, :name
  #     json.breweryName wishlist.beer.brewery, :name
  #   end
  # end
  # json.currentUserWishlist do
  #   beer.wishlists.where("user_id = ?", current_user.id).each do |wishlist|
  #     json.set! wishlist.id do
  #       json.beerName wishlist.beer.name
  #       json.breweryName wishlist.beer.brewery.name
  #     end
  #   end
  # end
  json.currentUserWishlist @beer.wishlists.select('id').where("user_id = ?", current_user.id).first
  json.set! @beer.style do
    json.extract! @beer, :id
  end

end
