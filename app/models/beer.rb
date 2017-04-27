# == Schema Information
#
# Table name: beers
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  description        :text
#  brewery_id         :integer          not null
#  abv                :float            not null
#  ibu                :float            not null
#  style              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Beer < ApplicationRecord
  #add model side validations, custom errors, style has to be in list of constants,
  validates :name, :brewery_id, :abv, :ibu, :style, presence: true

  has_attached_file :image, default_url: "/images/default-beer.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  #class method of styles
  belongs_to :brewery
  has_many :checkins
  # has_many :wishlist_users, primary_key: :id, foreign_key: :beer_id, class_name: 'Wishlist'
  has_many :wishlists
  has_many :wishlist_users, through: :wishlists, source: :user


  #include validation of inclusion of those
  #belongs_to :brewery
  #has_many users through checkins
  #has many checkins
  # has many wishlists through users
  #has many ratings


end
