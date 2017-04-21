class CreateBreweryLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :brewery_likes do |t|
      t.integer :brewery_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :brewery_likes, [:user_id, :brewery_id], unique: true
  end
end
