class EditMultResponses < ActiveRecord::Migration[5.2]
  def change
    add_column :mult_responses, :question_options_id, :integer, null: false
    add_index :mult_responses, :question_options_id
  end
end
