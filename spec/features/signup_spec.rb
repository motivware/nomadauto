# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe User, driver: :selenium_chrome, js: true do
  scenario 'signup for the application' do
    visit signup_path
    fill_in 'name', with: 'Damon Clark'
    fill_in 'email', with: 'user@test.com'
    fill_in 'password', with: 'password'
    fill_in 'repeat_password', with: 'password'
    fill_in 'subdomain', with: 'subdomain'
    click_button 'Sign Up'
  end
end
