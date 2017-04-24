class ChangeRatingToFloat < ActiveRecord::Migration[5.0]
  def change
    change_column :checkins, :rating, :float
  end
end
