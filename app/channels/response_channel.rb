class ResponseChannel < ApplicationCable::Channel
  def subscribed
    @group = Group.find(params[:groupId])
    stream_for @group
  end

  def respond(response)
    @response = Response.new(question_options_id: response['question_options_id'],
                             question_id: response['question_id'], body: response['body'])
    @response.registerable = current_user

    if @response.save
      ResponseChannel.broadcast_to(@group, type: 'RESPONSE', data: response_json)
    else
      puts @response.errors.full_messages
    end
  end

  private

  def response_json
    ApplicationController.render(
      :json,
      partial: 'api/responses/show',
      locals: { response: @response }
    )
  end
end
