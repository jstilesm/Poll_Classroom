# json.partial! "api/questions/question", question: @question
# json.questions @user.questions, partial: 'api/questions/question', as: :question


json.event do
    json.extract! question, :title, :type, :response_limit, :closed, :allow_unregistered
end

json.creator do
    json.extract! @question.user, :username, :first_name, :last_name
end

