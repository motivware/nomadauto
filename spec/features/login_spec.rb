# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe 'Login', js: true do
  scenario 'manager can login and see monitors' do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Monitors')
  end

  scenario 'employee can login and see monitors' do
    visit login_path
    fill_in 'Email', with: 'owen-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Monitors')
  end

  scenario 'invalid credentials stay on login page' do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'wrongpassword'
    click_button 'Log in'
    expect(page).to have_content('Sign in to your account')
  end

  scenario 'logout redirects to landing page' do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Monitors')

    click_button 'Logout'
    expect(current_url).to include('www')
  end
end
