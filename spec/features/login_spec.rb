# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe User, driver: :selenium_chrome, js: true do
  scenario 'login for the application as manager' do
    visit login_path()
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Contacts')
  end

  scenario 'login for the application as employee' do
    visit login_path()
    fill_in 'Email', with: 'owen-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Contacts')
  end
end
