class EditQuestionsTable2 < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :closed, :boolean, default: false,null: false
  end
end
