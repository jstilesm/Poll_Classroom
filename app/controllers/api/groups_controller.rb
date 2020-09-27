class Api::GroupsController < ApplicationController

    def show
    end

    def create
    end
    
    def update
    end

    def destroy
    end


    private
    def groups_params
        params.require(:groups).permit(:name)
    end
end