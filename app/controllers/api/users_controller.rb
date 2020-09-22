class Api::UsersController < ApplicationController 


    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            login(@user)
            render '/api/users/show'
        else 
            render json: @user.errors.full_messages
        end
    end

    def new
        @user = User.new
        render #JBUILDER
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :first_name, :last_name, :password)
    end
end

# auth branch test