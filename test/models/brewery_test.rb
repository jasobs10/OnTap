# == Schema Information
#
# Table name: breweries
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  style              :string
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

require 'test_helper'

class BreweryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
