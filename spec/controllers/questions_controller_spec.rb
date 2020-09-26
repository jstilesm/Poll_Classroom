require 'rails_helper'

RSpec.describe Api::QuestionsController, type: :controller do
  title = "What is the best color?"
  let!(:user) { User.create({ username: 'jack_bruce', first_name: 'jack', last_name: 'bruce', email: 'jack@bruce.com', password: 'abcdef' }) }
  let!(:group) {Group.create({ name: "Dummies"})}
  let!(:test_question) {Question.create({title: title, kind: 'text_response'})}

  describe 'POST #create' do
    before do
      allow(controller).to receive(:current_user) { user }
    end
    it 'creates a new question' do
      post :create, { format: :json, params: { group_id: 0, 
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
        allow(controller).to receive(:current_user) { jack }
      end

      it 'does not remove the question' do
        delete :destroy, params: { format: :json, params: { id: test_question.id }}
        expect(Question.exists?(test_question.id)).to be true
      end
    end
  end
end 
