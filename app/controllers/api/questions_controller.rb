class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    # debugger
    render '/api/questions/index'
  end

  def create
    @question = Question.new(question_params)
    @question.user = current_user
  

    if @question.save
      render '/api/questions/show'
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    # debugger
    @question = current_user.questions.find_by(id: params[:id])
    if @question
      render '/api/questions/show'
    else
      # debugger
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = current_user.questions.find_by(id: params[:id])
    if @question.nil?
      render json: "Question not found!", status: 422
    elsif @question.update(question_params)
      render '/api/questions/show'
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = current_user.questions.find_by(id: params[:id])
    if @question.nil?
      render json: "Question not found!", status: 422
    elsif @question && @question.delete
      render '/api/questions/show'
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private

  def question_params
    params.require(:question).permit(
      :title, :group_id, :kind, :response_limit,
      :closed, :allow_unregistered,
      question_options_attributes: [:label]
    )
  end
end
