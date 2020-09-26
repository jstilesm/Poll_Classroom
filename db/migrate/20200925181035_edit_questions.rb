class EditQuestions < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :boolean
    add_column :questions, :closed, :boolean, not_null: false, default: false
  end
end
