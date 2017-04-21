class CreateCheckins < ActiveRecord::Migration[5.0]
  def change
    create_table :checkins do |t|
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.integer :venue_id
      t.integer :rating, null: false
      t.string :address
      t.text :review
      t.string :container

      t.timestamps
    end
    add_index :checkins, :user_id
    add_index :checkins, :beer_id
    add_index :checkins, :venue_id
  end
end
