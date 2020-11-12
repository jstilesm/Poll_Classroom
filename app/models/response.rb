class Response < ApplicationRecord
  belongs_to :question_options,
             optional: true,
             primary_key: :id,
             foreign_key: :question_options_id,
             class_name: :QuestionOptions

  belongs_to :question

  belongs_to :registerable, polymorphic: true
end
