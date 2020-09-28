class Api::QuestionoptionsController < ApplicationController 

    def create
    end

    def update
    end
    
    def show
    end

    def destroy
    end

    private
    def question_options_params
        params.require(:user).permit(:label)
    end
end