class QuestionOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :question_options do |t|
      t.string :label, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
    add_index :question_options, :question_id
  end
end
