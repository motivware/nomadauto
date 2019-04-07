class SubdomainPresent
    def self.matches?(request)
        subdomains = %w{ https:// www admin }
        request.subdomain.present? && !subdomains.include?(request.subdomain)
    end
end

class SubdomainBlank
    def self.matches?(request)
        subdomains = %w{ https:// www admin }
        request.subdomain.blank? || subdomains.include?(request.subdomain)
    end
end

Rails.application.routes.draw do

  #mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get    'signup'  => 'users#new'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  resources :account_activations, only: [:edit]
  resources :password_resets,     only: [:new, :create, :edit, :update]
  resources :users



    constraints(SubdomainBlank) do
        root 'visitors#new'
        get 'contact-us', to: 'contacts#new', as: 'new_contact'
        resources :contacts, only: :create
        resources :visitors, only: [:new, :create, :index]
        get 'features', to: 'pages#features'
        get 'pricing', to: 'pages#pricing'
        get 'faq', to: 'pages#faq'
    end

  constraints(SubdomainPresent) do
    root 'projects#index'
    resources :projects, only: [:index, :show, :new, :create] do
      resources :workorders, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
        resources :comments
        collection do
            post :import
        end
      end
      resources :vehicles
      resources :invoices
      resources :parts

      scope module: "users" do
        resources :customers
        resources :deals
        resources :invites
        resources :activities
      end
    end
  end
end
