class RenameTypeTosStyle < ActiveRecord::Migration[5.0]
  def change
    rename_column :breweries, :type, :style
  end
end
