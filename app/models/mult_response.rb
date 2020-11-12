# == Schema Information
#
# Table name: mult_responses
#
#  id                  :bigint           not null, primary key
#  title               :string           not null
#  correct             :boolean          default(FALSE), not null
#  registerable_id     :integer
#  registerable_type   :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  question_options_id :integer          not null
#
class MultResponse < ApplicationRecord
  validates :title, presence: true
  validates :correct, inclusion: { in: [true, false] }

  belongs_to :question_options,
             primary_key: :id,
             foreign_key: :question_options_id,
             class_name: :QuestionOptions

  belongs_to :question
 belongs_to :registerable, polymorphic: true
end
