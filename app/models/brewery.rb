# == Schema Information
#
# Table name: breweries
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  style              :string           not null
#  country            :string           not null
#  city               :string           not null
#  state              :string           not null
#  fb                 :string
#  ig                 :string
#  twitter            :string
#  website            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Brewery < ApplicationRecord
  validates :name, :style, :country, :city, :state, presence: true
  validates :name, uniqueness: true

  has_attached_file :image, default_url: "/images/beers.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :beers, dependent: :destroy
  has_many :checkins, through: :beers
  has_many :brewery_likes
  has_many :brewery_likers,
    through: :brewery_likes,
    source: :user

end
