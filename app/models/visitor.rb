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
  validates :session_token, :username, presence: true, uniqueness: true
  # validates :password, length: {minimum: 6, allow_nil: true}

  has_many :responses, as: :registerable
  after_initialize :ensure_session_token

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
