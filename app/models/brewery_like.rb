# == Schema Information
#
# Table name: brewery_likes
#
#  id         :integer          not null, primary key
#  brewery_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BreweryLike < ApplicationRecord
end
