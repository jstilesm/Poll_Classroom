# == Schema Information
#
# Table name: question_options
#
#  id          :bigint           not null, primary key
#  label       :string           not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class QuestionOptions < ApplicationRecord


    belongs_to :question,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Question

    has_many :responses,
        primary_key: :id,
        foreign_key: :question_options_id,
        class_name: :MultResponse
    

end
