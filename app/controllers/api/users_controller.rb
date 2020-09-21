class UsersController < ApplicationController 


    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            login_user!(@user)
            render #JBUILDER
        else 
            flash.now[:errors] = @user.errors.full_messages
            render #JBUILDER
        end
    end

    def new
        @user = User.new
        render #JBUILDER
    end

    private

    def user_params
        params.require(:user).params(:email, :password)
    end
end