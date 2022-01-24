# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe User, driver: :selenium_chrome, js: true do
  scenario 'login for the application' do
    visit login_path
    fill_in 'email', with: 'user@test.com'
    fill_in 'password', with: 'password'
    click_button 'Log In'
  end
end
