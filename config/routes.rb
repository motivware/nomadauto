# frozen_string_literal: true

class SubdomainPresent
  def self.matches?(request)
    subdomains = %w[https:// www admin]
    request.subdomain.present? && !subdomains.include?(request.subdomain)
  end
end

class SubdomainBlank
  def self.matches?(request)
    subdomains = %w[https:// www admin]
    request.subdomain.blank? || subdomains.include?(request.subdomain)
  end
end

Rails.application.routes.draw do
  # mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get    'signup'  => 'users#new'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  resources :account_activations, only: [:edit]
  resources :password_resets,     only: %i[new create edit update]
  resources :users

  constraints(SubdomainBlank) do
    root 'visitors#new'
    get 'contact-us', to: 'customer_contacts#new', as: 'new_contact'
    resources :customer_contacts, only: :create
    resources :visitors, only: %i[new create index]
    get 'features', to: 'pages#features'
    get 'pricing', to: 'pages#pricing'
    get 'faq', to: 'pages#faq'
  end

  constraints(SubdomainPresent) do
    root 'projects#index'
    resources :projects, only: %i[index show new create] do
      resources :tasks, only: %i[index show new create edit update destroy] do
        resources :comments
      end
      resources :profiles

      scope module: 'users' do
        resources :contacts do
          collection do
            post :import
          end
        end
        resources :invites
      end
    end
  end
end
