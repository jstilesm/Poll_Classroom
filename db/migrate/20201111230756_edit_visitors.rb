class EditVisitors < ActiveRecord::Migration[5.2]
  def change
    remove_column :visitors, :password_digest
    remove_column :visitors, :visitor_username
    add_column :visitors, :username, :string, null: false
  end
end
