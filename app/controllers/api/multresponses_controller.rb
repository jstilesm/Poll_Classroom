class Api::MultresponsesController < ApplicationController

    def create
        @mult_response = MultResponse.new(mult_responses_params)
        if @mult_response.save
            render '/api/mult_response/show'
        else
            render json: @mult_response.errors.full_messages, status: 422
        end
        
    end

   

    private

    def mult_responses_params
        params.require(:mult_response).permit(:question_options_id)
    end
end