Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :index]
    resources :songs, only: [:index, :show, :create, :update, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy]
    resources :participants, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end
end
