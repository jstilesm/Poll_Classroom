class Api::QuestionsController < ApplicationController

    def index

        @question = Question.all
        render '/api/questions/show'
    end
    
    def create
         @question = Question.new(question_params)
         @question.user = current_user
         @question.group_id = params[:group_id]
         

        if @question.save
        render '/api/questions/show'
            #  '/api/groups/questions/show ?'
        else 
            render json: @question.errors.full_messages, status: 422
        end 
    end

    def show
        @question = current_user.questions.find_by(id: params[:id])
        if @question
            render '/api/questions/show'
        else
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
        if @question && @question.delete
            render '/api/questions/show'
        end
    end

    private
    def question_params
        params.require(:question).permit(:title, :kind, :response_limit, :closed, :allow_unregistered)
    end
end