# == Schema Information
#
# Table name: wishlists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  beer_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Wishlist < ApplicationRecord
  validates :user_id, :beer_id, null: false
  validates :user_id, uniqueness: { scope: :beer_id }

  belongs_to :user
  belongs_to :beer
end
