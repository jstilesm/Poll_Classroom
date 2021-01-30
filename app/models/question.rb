# == Schema Information
#
# Table name: questions
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  response_limit     :integer          default(1), not null
#  allow_unregistered :boolean          default(FALSE), not null
#  group_id           :integer
#  kind               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Question < ApplicationRecord
  validates :title, :kind, presence: true
  validates :kind, inclusion: { in: ['mult_response', 'text_response'] }


  belongs_to :group,
             primary_key: :id,
             foreign_key: :group_id,
             class_name: :Group,
             optional: false

  delegate :user, to: :group
  belongs_to :user

  has_many :question_options,
           inverse_of: :question,
           primary_key: :id,
           foreign_key: :question_id,
           class_name: :QuestionOptions

  accepts_nested_attributes_for :question_options, allow_destroy: true

  has_many :responses,
           primary_key: :id,
           foreign_key: :question_id,
           class_name: :Response
end
