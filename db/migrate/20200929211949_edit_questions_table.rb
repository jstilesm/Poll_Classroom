class EditQuestionsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :questions, :group_id
    remove_column :questions, :group_id
    add_column :questions, :group_id, :integer
    add_index :questions, :group_id
  end
end
