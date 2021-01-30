class EditQuestionsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :author_id
  end
end
