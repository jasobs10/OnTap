# debugger

# json.set! @toast.user_id do
#   json.extract! @toast.user, :id, :f_name, :l_name
#   json.toastId @toast.id
#   json.checkinId @toast.checkin_id
# end
json.user_id @toast.user_id
json.f_name @toast.user.f_name
json.l_name @toast.user.l_name
json.id @toast.id
json.checkin_id @toast.checkin_id
# json.userToasts do
#   json.array! @toast.users.map(&:id)
# end
