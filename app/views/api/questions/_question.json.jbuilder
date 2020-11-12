json.id @question.id
json.title @question.title
json.kind @question.kind
json.response_limit @question.response_limit
json.closed @question.closed
json.group_id @question.group_id
json.author_id @question.author_id
json.allow_unregistered @question.allow_unregistered
json.question_options do
  json.array! @question.question_options, :id, :label
end
