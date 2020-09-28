class EditRegisterable < ActiveRecord::Migration[5.2]
  def change
    remove_index :mult_responses, :registerable_id
    remove_column :mult_responses, :registerable_id
    remove_column :mult_responses, :registerable_type
    add_column :mult_responses, :registerable_id, :integer, null: false
    add_column :mult_responses, :registerable_type, :string, null: false
    add_index :mult_responses, :registerable_id

    remove_index :text_responses, :registerable_id
    remove_column :text_responses, :registerable_id
    remove_column :text_responses, :registerable_type
    add_column :text_responses, :registerable_id, :integer, null: false
    add_column :text_responses, :registerable_type, :string, null: false
    add_index :text_responses, :registerable_id
    
  end
end
