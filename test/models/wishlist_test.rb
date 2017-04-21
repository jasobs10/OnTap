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

require 'test_helper'

class WishlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
