class Api::ResponsesController < ApplicationController
  def create
  end

  private

  def responses_params
    params.require(:response).permit(:body, :question_options_id, :question_id)
  end
end
