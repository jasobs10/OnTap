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

require 'test_helper'

class BeerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
