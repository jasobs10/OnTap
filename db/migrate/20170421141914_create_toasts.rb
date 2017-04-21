class CreateToasts < ActiveRecord::Migration[5.0]
  def change
    create_table :toasts do |t|
      t.integer :user_id, null: false
      t.integer :checkin_id, null: false
      t.timestamps
    end
    add_index :toasts, [:user_id, :checkin_id], unique: true
  end
end
