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

require 'test_helper'

class CheckinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
