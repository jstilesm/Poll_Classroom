# == Schema Information
#
# Table name: groups
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Group < ApplicationRecord 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
        
end
