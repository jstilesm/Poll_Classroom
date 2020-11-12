class CreateResponse < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.string :body, null: true
      t.integer :question_options_id, snull: true
      t.integer :question_id, null: false
      t.integer :registerable_id, null: false
      t.string :registerable_type, null: false
      t.timestamps
    end
    add_index :responses, :question_options_id
    add_index :responses, :registerable_id
    add_index :responses, :question_id
  end
end
