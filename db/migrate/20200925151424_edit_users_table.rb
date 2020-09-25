class EditUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :registerable_id
    remove_column :users, :registerable_type
  end
end
