# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :string           not null
#  checkin_id :string           not null
#  comment    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
