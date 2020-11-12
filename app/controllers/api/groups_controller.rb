class Api::GroupsController < ApplicationController
  def index
    @groups = current_user.groups
    # @groups = User.all.first.groups
    # debugger
    render 'api/groups/index'
  end

  def show
    @group = Group.find_by(id: params[:id])
  end

  def create
    @group = Question.new(group_params)
    #  debugger
    @group.user = current_user
    @group.group_id = params[:group_id]

    if @group.save
      render '/api/groups/show'
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = current_user.groups.find_by(id: params[:id])
    if @group.nil?
      render json: "Group not found", status: 422
    elsif @group.update(group_params)
      render '/api/groups/show'
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = current_user.groups.find_by(id: params[:id])
    if @group && @group.delete
      render '/api/groups/show'
    end
  end

  private

  def groups_params
    params.require(:groups).permit(:name)
  end
end
