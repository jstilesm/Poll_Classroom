require 'rails_helper'

# test 
  # title = "What is the best color?"
  # user = User.create({ username: 'jack_bruce', first_name: 'jack', last_name: 'bruce', email: 'jack@bruce.com', password: 'abcdef' }) 
  # group = Group.create({ name: "Dummies", user_id: user.id})
  # question = Question.create({title: title, author_id: user.id, group_id: group.id, kind: 'text_response'})

RSpec.describe Api::QuestionsController, type: :controller do
  title = "What is the best color?"
  let!(:user) { User.create({ username: 'jacky_bruce', first_name: 'jack', last_name: 'bruce', email: 'jack2@bruce.com', password: 'abcdef' }) }
  # debugger
  let!(:user2) { User.create({ username: 'jill_bruce', first_name: 'jill', last_name: 'bruce', email: 'jill@bruce.com', password: 'abcdef' }) }
  let!(:group) { Group.create({ name: "Dummies", user_id: user.id})}
  let!(:test_question) {Question.create({title: title, author_id: user.id, group_id: group.id, kind: 'text_response'})}

  describe 'validate models' do
    it 'creates nessecary records' do
      # debugger
      expect(user.errors.messages).to be {}
      expect(user2.errors.messages).to be {}
      expect(group.errors.messages).to be {}
      expect(test_question.errors.messages).to be {}
    end
  end

  describe 'POST #create' do  
    before do
      allow(controller).to receive(:current_user) { user }
    end
    it 'creates a new question' do
      # debugger
      post :create, { format: :json, params: { author_id: user.id, group_id: group.id, 
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
        allow(controller).to receive(:current_user) { user }
      end

      it 'updates the question and redirects to the question\s page' do
        new_title = "what is worst color?"
        patch :update, {format: :json, params: { id: test_question.id, question: { title: new_title }}}
        expect(response).to have_http_status(200)
        # expect(response.body).to be "fish"
        # debugger
        expect(Question.exists?(title: new_title)).to be true
      end
    end
    
  end
end
