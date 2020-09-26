class EditGroups < ActiveRecord::Migration[5.2]
  def change
    remove_index :groups, :user_id
    remove_column :groups, :user_id
  end
end
