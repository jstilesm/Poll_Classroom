class QuestionsController < ApplicationController

    def new
        @question = Question.new
        render :new
    end

    def create
         @question = Question.new(question_params)
         @question.user_id = params[:user_id]

        if @question.save
            render '/api/questions/show'
        else 
            render json: @question.errors.full_messages, status: 422
        end 
    end


    def update
        @question = current_user.poems.find_by(id: params[:id])
        if @question.nil?
            flash[:errors] = ["Question not found!"]
        elsif @question.update(question_params)
            render '/api/questions/show'
        else
            render json: @question.errors.full_messages, status: 422
        end

    end

     def destroy
        @question = current_user.goals.find_by(id: params[:id])
        if @question && @question.delete
            render '/api/questions/show'
        end
    end

    private
    def question_params
        params.require(:question).permit(:title, :type, :response_limit, :closed, :allow_unregistered)
    end
end