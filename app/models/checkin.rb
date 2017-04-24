# == Schema Information
#
# Table name: checkins
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  beer_id    :integer          not null
#  venue_id   :integer
#  rating     :integer          not null
#  address    :string
#  review     :text
#  container  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Checkin < ApplicationRecord
  validates :user_id, :beer_id, :rating, presence: true
  validates :rating, inclusion: { in: 0..5 }
  validates :container, inclusion: { in: %w(can bottle draft )}
  validates :review, length: { maximum: 140 }

  belongs_to :user
  belongs_to :beer
  has_one :brewery, through: :beer
  #has_many breweries through beer

end
