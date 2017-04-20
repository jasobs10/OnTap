# == Schema Information
#
# Table name: beers
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  brewery_id  :integer          not null
#  abv         :float            not null
#  ibu         :float            not null
#  style       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Beer < ApplicationRecord
  #add model side validations, custom errors, style has to be in list of constants,
  validates :name, :brewery_id, :abv, :ibu, :style, presence: true
  #class method of styles

  #include validation of inclusion of those
  #belongs_to :brewery
  #has_many users through checkins
  #has many checkins
  # has many wishlists through users
  #has many ratings


end
