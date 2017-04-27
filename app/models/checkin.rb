# == Schema Information
#
# Table name: checkins
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  beer_id            :integer          not null
#  venue_id           :integer
#  rating             :integer          not null
#  address            :string
#  review             :text
#  container          :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Checkin < ApplicationRecord
  validates :user_id, :beer_id, :rating, presence: true
  validates :rating, inclusion: { in: 0..5 }
  validates :container, inclusion: { in: %w(can bottle draft )}
  validates :review, length: { maximum: 140 }
  has_attached_file :image, default_url: "/images/tired-hands.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  belongs_to :beer
  has_one :brewery, through: :beer
  has_many :toasts
  has_many :comments
  has_many :commenters, through: :comments, source: :user
  has_many :toast_users, through: :toasts, source: :user
  #has_many breweries through beer

end
