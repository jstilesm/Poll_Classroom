class Api::UsersController < ApplicationController
  # def show
  #     @user = User.find(params[:id])
  #     render :show
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.nil?
      render json: "User not Found", status: 422
    elsif @user.update(user_params)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def exists
    if params.has_value?("")
      render json: false
    else
      identifier = params.require(:identifier)
      @user = User.find_by_username_or_email(identifier)
      if @user
        render json: true
      else
        render json: false
      end
    end
    # debugger
  end

  private

  def user_params
    params.require(:user).permit(:password, :email, :first_name, :last_name)
  end
end

# auth branch test
