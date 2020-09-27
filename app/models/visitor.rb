# == Schema Information
#
# Table name: visitors
#
#  id               :bigint           not null, primary key
#  visitor_username :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Visitor < ApplicationRecord
    validates :session_token, :visitor_username, presence: true, uniqueness: true
    validates :password_digest, presence: { message: "Password can't blank"}
    # validates :password, length: {minimum: 6, allow_nil: true}


    has_many :mult_responses, as: :registerable
    has_many :text_responses, as: :registerable

end
