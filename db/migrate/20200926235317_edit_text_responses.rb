class EditTextResponses < ActiveRecord::Migration[5.2]
  def change
    add_column :text_responses, :question_id, :integer, null: false
  end
end
