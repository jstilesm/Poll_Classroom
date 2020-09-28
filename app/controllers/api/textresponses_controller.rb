class Api::TextResponsesController < ApplicationController

    def create
    end

    def update
    end
    
    def show
    end

    def destroy
    end

    private
    def text_responses_params
        params.require(:text_responses).permit(:body)
    end
end