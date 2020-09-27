require 'rails_helper'

# test 
  # title = "What is the best color?"
  # user = User.create({ id: 0, username: 'jack_bruce', first_name: 'jack', last_name: 'bruce', email: 'jack@bruce.com', password: 'abcdef' }) 
  # group = Group.create({ id: 1, name: "Dummies", user_id: user.id})
  # question = Question.create({id: 0, title: title, author_id: user.id, group_id: group.id, kind: 'text_response'})

RSpec.describe Api::QuestionsController, type: :controller do
  title = "What is the best color?"
  let!(:user) { User.create({ id: 10, username: 'jack_bruce', first_name: 'jack', last_name: 'bruce', email: 'jack@bruce.com', password: 'abcdef' }) }
  let!(:user2) { User.create({ id: 11, username: 'jill_bruce', first_name: 'jill', last_name: 'bruce', email: 'jill@bruce.com', password: 'abcdef' }) }
  let!(:group) {Group.create({ id: 12, name: "Dummies", user_id: user.id})}
  let!(:test_question) {Question.create({id: 1, title: title, author_id: user.id, group_id: group.id, kind: 'text_response'})}

  describe 'POST #create' do  
    before do
      allow(controller).to receive(:current_user) { user }
    end
    it 'creates a new question' do
      post :create, { format: :json, params: { author_id: 0, group_id: 0, 
                              question: 
                              { title: title,
                                kind: 'text_response'
                              } 
                            }
                          }
                            # debugger
      expect(response).to have_http_status(200)
      expect(Question.exists?(title: title)).to be true

    end 
  end

  describe 'DELETE #destroy' do
    context 'when logged in as the question\'s owner' do
      before do
        allow(controller).to receive(:current_user) { user }
      end

      it 'removes the question and redirects back to the show page' do
        # debugger
        delete :destroy, { format: :json, params: { id: test_question.id }}
        # debugger
        expect(Question.exists?(test_question.id)).to be false
      end
    end

    context 'when NOT logged in as the question\'s owner' do
      before do
        allow(controller).to receive(:current_user) { user2 }
      end

      it 'does not remove the question' do
        delete :destroy, { format: :json, params: { id: test_question.id }}
        expect(Question.exists?(test_question.id)).to be true
      end
    end
  end 

  describe 'PATCH #update' do
    context 'when logged in as a different user' do
      before do
        allow(controller).to receive(:current_user) { user2 }
      end

      it 'should not allow users to update another user\'s questions' do
        begin
          patch :update, { format: :json, params: { id: test_question.id, question: { title: 'Jack Question now!' }}}
        rescue ActiveRecord::RecordNotFound
        end
        edited_question = Question.find(test_question.id)
        expect(edited_question.title).not_to eq('Jack Question now!')
      end
    end
    
    context 'when logged in as the question\'s owner' do
      before do
        allow(controller).to receive(:current_user) { jasmine }
      end

      it 'updates the question and redirects to the question\s page' do
        patch :update, {format: :json, params: { id: test_question.id, question: { title: 'what is the worst color?' }}}
        expect(Question.exists?(title: 'what is the worst color?')).to be true
      end
    end
   

    context 'when logged out' do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it 'redirects to the login page' do
          patch :update, {format: :json, params: { id: test_question.id, question: { title: 'what is the worst color?' }}}
          expect(response).to have_http_status(200)
      end
    end



    
  end
end
