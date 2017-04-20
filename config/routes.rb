Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :beers, only: [:show, :index, :update, :create]
    resources :breweries, only: [:index, :show, :update, :create] do
      resources :beers, only: [:create, :index]
    end

  end


end
