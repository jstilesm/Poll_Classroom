# == Schema Information
#
# Table name: groups
#
#  id      :bigint           not null, primary key
#  name    :string           not null
#  user_id :integer          not null
#
class Group < ApplicationRecord 

        has_many :questions,
            primary_key: :id, 
            foreign_key: :group_id,
            class_name: :Question

        belongs_to :user,
            primary_key: :id,
            foreign_key: :user_id,
            class_name: :User
end
