Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :checkins, only: [:index]
    end

    resources :wishlists, only: [:create, :destroy]
    resources :beers, only: [:show, :index, :update, :create] do
      resources :checkins, only: [:index]
    end
    resources :breweries, only: [:index, :show, :update, :create] do
      resources :beers, only: [:create, :index]
      resources :checkins, only: [:index]
    end

    resources :checkins, only: [:index, :create, :update, :destroy, :show]
    resources :brewery_likes, only: [:create, :destroy]
    resources :toasts, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :update, :destroy, :show]

  end


end
