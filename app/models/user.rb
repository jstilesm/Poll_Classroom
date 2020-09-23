# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  username          :string           not null
#  email             :string           not null
#  first_name        :string           not null
#  last_name         :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  registerable_id   :integer
#  registerable_type :string
#
class User < ApplicationRecord
    validates :session_token, :email, presence: true, uniqueness: true
    validates :password_digest, presence: { message: "Password can't blank"}
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :first_name, :last_name, presence: {message: "can't be blank"}

    after_initialize :ensure_session_token

    attr_reader :password

    #fig_vaper

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_username_or_email(identifier)   
        User.where(username: identifier).or(User.where(email: identifier)).first
    end


    def self.find_by_credentials(identifier, password) 
        user = User.find_by_username_or_email(identifier)
        # puts user
        return nil if user.nil?

        user.is_password?(password) ? user : nil
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    private 

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
