class Api::MultresponsesController < ApplicationController
  def create; end

  private

  def mult_responses_params
    params.require(:mult_response).permit(:question_options_id)
  end
end
