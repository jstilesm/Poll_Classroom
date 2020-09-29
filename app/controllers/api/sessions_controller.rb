class Api::SessionsController < ApplicationController

    # before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_username_or_email(login_params[:identifier])
        # debugger
        if @user.nil?
            render json: ['Account not found'], status: 401
        elsif @user.is_password?(login_params[:password])
            login(@user)    
            render "api/users/show"
        else
            render json: ['Password is incorrect'], status: 401
        end
    end


    def destroy
        # debugger
        @user = current_user
        # debugger
        if @user
            logout_user!
            render 'api/users/show'
        else
            render json: ["No Current User"], status: 404
        end
    end

    private
    def login_params
        params.require(:user).permit(:identifier, :password)
    end

end