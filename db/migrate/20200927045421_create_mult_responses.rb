class CreateMultResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :mult_responses do |t|
      t.string :title, null: false
      t.boolean :correct, null: false, default: false
      t.integer :registerable_id
      t.string :registerable_type
      t.integer :question_options_id, null: false
      t.timestamps
    end
    add_index :mult_responses, :question_options_id
    add_index :mult_responses, :registerable_id
  end
end
