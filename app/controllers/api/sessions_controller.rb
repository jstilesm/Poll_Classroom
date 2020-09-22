class Api::SessionsController < ApplicationController

    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password])

        # debugger
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ['Account not found'], status: 401
        end
    end


    def destroy
        @user = current_user
        if @user
            logout
            render 'api/users/show'
        else
            render json: ["No Current User"], status: 404
        end
    end


end