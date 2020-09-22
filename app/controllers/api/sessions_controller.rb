class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password])
            # params[:user][:first_name]
            # params[:user][:last_name]
        
        if @user
            login(@user)
            render # `/api/users/${user.id}`
        else
            render json: ['Account not found'], status: 401
        end
    end


    def destroy
        @user = current_user
        if @user
            logout
            render # `/api/users/${user.id}`
        else
            render json: ["No Current User"], status: 404
        end
    end


end