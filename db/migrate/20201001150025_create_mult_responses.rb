class CreateMultResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :mult_responses do |t|
      t.string :title, null: false
      t.boolean :correct, default: false, null: false
      t.integer :question_options_id, null: false
      t.integer :registerable_id, null: false
      t.string :registerable_type, null: false
      t.timestamps
    end
    add_index :mult_responses, :question_options_id
    add_index :mult_responses, :registerable_id
  end
end
