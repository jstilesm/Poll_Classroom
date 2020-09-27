class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
    end
    add_index :groups, :user_id
  end
end
