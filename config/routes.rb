Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do
      collection do
        get "/exists" => "users#exists" 
      end
      resources :visitors, only: [:create]
      resources :groups, only: [:index, :create]
    end
    resources :groups, only: [:update, :destroy] do
      resources :questions, only: [:create]
    end
    
    resources :questions, only: [:index, :update, :show, :destroy] do
      resources :mult_responses, only: [:create]
      resources :text_responses, only: [:create]
      resources :question_options, only: [:create] 
    end
    resources :mult_responses, only: [:index, :update, :show, :destroy]
    resources :text_responses, only: [:update, :show, :destroy]
    resources :question_options, only: [:index, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :visitors, only: [:update, :destroy]

    
  end
end
 