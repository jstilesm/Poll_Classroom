class Questions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.integer :response_limit, default: 1, null: false
      t.boolean :allow_unregistered, default: false, null: false
      t.integer :author_id, null: false
      t.string :kind, null: false
      t.integer :group_id
      t.boolean :closed, default: false, null: false
      t.timestamps
    end
    add_index :questions, :group_id
    add_index :questions, :author_id
  end
end
