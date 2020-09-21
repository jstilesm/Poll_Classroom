Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "staric_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :new, :destroy]
  end
end
