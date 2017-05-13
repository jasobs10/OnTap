class RemoveNullFromBreweryStyle < ActiveRecord::Migration[5.0]
  def change
    change_column :breweries, :style, :string, null: true
  end
end
