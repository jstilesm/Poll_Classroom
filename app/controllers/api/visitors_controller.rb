class Api::VisitorsController < ApplicationController 

    def create
    end

    def update
    end

    def destroy
    end

    private
    def visitor_params
        params.require(:visitor).permit(:visitor_username)
    end
    
end