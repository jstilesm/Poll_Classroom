


json.extract! @group, :name

# json.questionIds @question.question_ids

json.questions do
  json.array! @group.questions, :title, :kind, :response_limit, :closed, :allow_unregistered
end
