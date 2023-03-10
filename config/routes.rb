Rails.application.routes.draw do

  resources :users, only: [:create, :show]
  resources :accounts, only: [:create, :show]
  

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/account", to: "accounts#index"
  post "/enroll", to: "users#create"

  #Try "/account/user_id" if the other one does not work
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
