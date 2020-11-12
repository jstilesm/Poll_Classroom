json.array! @groups do |group|
  json.extract! group, :name

  json.questions group.questions do |question|
    json.extract! question, :id, :title, :kind, :response_limit, :allow_unregistered, :closed
  end
end
