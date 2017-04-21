# == Schema Information
#
# Table name: toasts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  checkin_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ToastTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
