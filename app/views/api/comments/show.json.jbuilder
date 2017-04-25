json.extract! @comment, :user_id, :checkin_id, :created_at, :id
json.author_f_name @comment.user.f_name
json.author_l_name @comment.user.l_name
