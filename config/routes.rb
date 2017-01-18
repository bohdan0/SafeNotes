Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :notes, only: [:index, :show, :create, :update, :destroy] do
      resources :tags, only: [:show, :destroy, :create]
    end
    resources :notebooks, only: [:index, :show, :create, :destroy] do
      resources :notes, only: :index
    end
    resources :tags, only: [:index, :create, :destroy]
  end
end
