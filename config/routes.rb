Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :show] do
      collection do
        get "/exists" => "users#exists" 
      end
      resources :visitors, only: [:create]
    end
    resources :groups, only: [:show, :create, :update, :destroy] do
      resources :questions, only: [:index, :create, :update, :show] do 
         resources :mult_responses, only: [:create, :update, :show, :destroy]
         resources :text_responses, only: [:create, :update, :show, :destroy]
         resources :question_options, only: [:create, :update, :show, :destroy]
      end
    end
    resources :questions, only: [:destroy]
    resource :session, only: [:create, :destroy]
    resources :visitors, only: [:update, :destroy]

    
  end
end
 