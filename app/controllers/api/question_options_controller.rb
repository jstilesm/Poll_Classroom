class Api::QuestionOptionsController < ApplicationController
  def show
    @question_option = QuestionOptions.find_by(id: params[:id])
    if @question_option.nil? || @question_option.question.user != current_user
      render json: "Question not found!", status: 422
    else
      render '/api/question_options/show'
    end
  end

  def update
    @question_option = QuestionOptions.find_by(id: params[:id])
    if @question_option.nil? || @question_option.question.user != current_user
      render json: "Question not found!", status: 422
    elsif @question_option.update(question_options_params)
      render '/api/question_options/show'
    else
      render json: @question_option.errors.full_messages, status: 422
    end
  end

  private

  def question_options_params
    params.require(:question_option).permit(:label)
  end
end
