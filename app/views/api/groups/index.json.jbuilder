json.array! @groups do |group|
  
  json.extract! group, :name

  json.questions group.questions do |question|
    json.extract! question, :title, :type, :response_limit, :closed, :allow_unregistered
  end
  
end
