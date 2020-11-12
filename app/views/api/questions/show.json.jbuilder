# json.partial! "api/questions/question", question: @question
# json.questions @user.questions, partial: 'api/questions/question', as: :question

json.partial! "api/questions/question", question: @question

# json.creator do
#     json.extract! @question.user, :username, :first_name, :last_name
# end
