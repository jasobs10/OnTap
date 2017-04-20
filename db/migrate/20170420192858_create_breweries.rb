class CreateBreweries < ActiveRecord::Migration[5.0]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.string :country, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :fb
      t.string :ig
      t.string :twitter
      t.string :website

      t.timestamps
    end
  end
end
