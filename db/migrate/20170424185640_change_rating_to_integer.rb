class ChangeRatingToInteger < ActiveRecord::Migration[5.0]
  def change
    change_column :checkins, :rating, :integer
  end
end
