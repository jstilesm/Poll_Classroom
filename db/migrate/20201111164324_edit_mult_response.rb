class EditMultResponse < ActiveRecord::Migration[5.2]
  def change
    remove_column :mult_responses, :correct
    add_column :question_options, :correct, :boolean, default: false, null: false
  end
end
