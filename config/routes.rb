Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create update show] do
      collection do
        get '/exists' => 'users#exists'
      end
      resources :groups, only: [:create]
    end
    resources :groups, only: %i[index create show update destroy] do
      resources :questions, only: [:create]
    end

    resources :questions, only: %i[index update show destroy] do
      # resources :mult_responses, only: [:create]
      # resources :text_responses, only: [:create]

      resources :question_options, only: [:create]
    end
    resources :mult_responses, only: %i[index update show destroy]
    resources :text_responses, only: %i[update show destroy]
    resources :responses, only: %i[index show create update]
    resources :question_options, only: %i[index update show destroy]
    resource :session, only: %i[create destroy]
    resources :visitors, only: [:create]
  end
end
