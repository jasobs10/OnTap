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

require 'test_helper'

class BreweryLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
