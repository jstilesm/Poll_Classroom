# == Schema Information
#
# Table name: groups
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Group < ApplicationRecord 

        has_many :questions,
            primary_key: :id, 
            foreign_key: :group_id,
            class_name: :Group
end
