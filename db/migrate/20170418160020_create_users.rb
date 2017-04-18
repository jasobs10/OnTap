class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.text :about
      t.string :city
      t.string :state
      t.string :country
      t.timestamps
    end
  end
end
