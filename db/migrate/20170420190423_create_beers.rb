class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.text :description
      t.integer :brewery_id, null: false
      t.float :abv, null: false
      t.float :ibu, null: false
      t.string :style, null: false
      
      t.timestamps
    end
    add_index :beers, :brewery_id
  end
end
