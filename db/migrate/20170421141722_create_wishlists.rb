class CreateWishlists < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlists do |t|
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.timestamps
    end
    add_index :wishlists, [:beer_id, :user_id], unique: true
  end
end
