class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :user_id, null: false
      t.string :checkin_id, null: false
      t.text :comment, null: false

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :checkin_id
  end
end
