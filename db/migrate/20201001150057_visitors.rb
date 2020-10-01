class Visitors < ActiveRecord::Migration[5.2]
  def change
    create_table :visitors do |t|
      t.string :visitor_username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :visitors, :session_token, unique: true
  end
end
