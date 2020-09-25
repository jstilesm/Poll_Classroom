# == Schema Information
#
# Table name: mult_responses
#
#  id                :bigint           not null, primary key
#  title             :string           not null
#  correct           :boolean          default(FALSE), not null
#  registerable_id   :integer
#  registerable_type :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class MultResponse < ApplicationRecord
    validates :title, presence: true
    validates :correct, inclusion: {in: [true, false]}



    belongs_to :user, polymorphic: true

end
