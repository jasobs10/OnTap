json.extract! @comment, :user_id, :checkin_id, :created_at, :id
json.author_f_name @comment.user.f_name
json.author_l_name @comment.user.l_name
json.comment @comment.comment

json.checkin_creator @comment.checkin.user_id
json.user_image_url @comment.user.avatar.url
