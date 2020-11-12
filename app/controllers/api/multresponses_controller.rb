class Api::MultresponsesController < ApplicationController
      @mult_response = MultResponse.new(mult_responses_params)
    # INSERT WEB AND SOCKET
    if @mult_response.save
        render '/api/mult_response/show'
    else
      end
  end

  private

    def mult_responses_params
    params.require(:mult_response).permit(:question_options_id)
    end
end
                  
