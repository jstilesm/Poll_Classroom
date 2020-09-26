class EditQuestionsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :type
    add_column :questions, :kind, :string, null: false
  end
end
