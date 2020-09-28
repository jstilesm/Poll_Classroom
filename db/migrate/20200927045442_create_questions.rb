class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.integer :response_limit, null: false, default: 1
      t.boolean :allow_unregistered, null: false, default: false
      t.integer :group_id, null: false
      t.integer :author_id, null: false
      t.string :kind, null: false
      t.timestamps
    end
    add_index :questions, :author_id
    add_index :questions, :group_id
  end
end
