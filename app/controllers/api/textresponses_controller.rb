class Api::TextResponsesController < ApplicationController

    def create
        @text_responses = TextResponse.new(text_responsess_params)
        if @text_responses.save
            render '/api/text_responses/show'
        else
            render json: @text_responses.errors.full_messages, status: 422
        end
        
    end

    private
    def text_responses_params
        params.require(:text_responses).permit(:body)
    end
end