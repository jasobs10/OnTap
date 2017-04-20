class AddUniquenessToBreweryModel < ActiveRecord::Migration[5.0]
  def change
    add_index :breweries, :name, unique: true, using: :btree
  end
end
