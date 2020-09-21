class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :registerable_id, :int, uniqueness: true
    add_column :users, :registerable_type, :string
    add_index :users, :registerable_id
  end
end
