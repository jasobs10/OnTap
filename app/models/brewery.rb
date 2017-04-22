# == Schema Information
#
# Table name: breweries
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  style      :string           not null
#  country    :string           not null
#  city       :string           not null
#  state      :string           not null
#  fb         :string
#  ig         :string
#  twitter    :string
#  website    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Brewery < ApplicationRecord
  validates :name, :style, :country, :city, :state, presence: true
  validates :name, uniqueness: true

  has_many :beers, dependent: :destroy
  has_many :checkins, through: :beers

  #class method to return array of type
  #validation for needing to be one of those
  #has_many likes
  #has_many likers
  #has_many beers
  #has_many checkins
  #has_many ratings


end
