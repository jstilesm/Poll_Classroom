class Api::MultresponsesController < ApplicationController

    def create
    end

    def update
    end
    
    def show
    end

    def destroy
    end

    private

    def mult_responses_params
        params.require(:mult_responses).permit(:title, :correct)
    end
end