class Api::VisitorsController < ApplicationController
  
  def create
    @visitor = Visitor.new(visitor_params)
    if @visitor.save 
      login_visitor(@visitor)
      render "/api/visitors/show"
    else
      render json: @visitor.errors.full_messages, status: 422
    end
  end


  def destroy
  end

  private

  def visitor_params
    params.require(:visitor).permit(:username)
  end
end
