# == Schema Information
#
# Table name: text_responses
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  registerable_id   :integer
#  registerable_type :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class TextResponse < ApplicationRecord
    validates :body, presence: true

    belongs_to :user, polymorphic: true
end