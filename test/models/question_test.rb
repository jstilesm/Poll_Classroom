# == Schema Information
#
# Table name: questions
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  response_limit     :integer          default(1), not null
#  allow_unregistered :boolean          default(FALSE), not null
#  group_id           :integer          not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  closed             :boolean          default(FALSE)
#  kind               :string           not null
#
require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
