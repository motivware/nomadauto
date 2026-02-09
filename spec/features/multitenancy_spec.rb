# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe 'Multitenancy', js: true do
  scenario 'login redirects to user subdomain' do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Contacts')
    expect(current_url).to include('testing.lvh.me')
  end

  scenario 'visiting a different subdomain does not show tenant data' do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Contacts')

    # Navigate to a subdomain that doesn't belong to this user
    port = current_url.match(/:(\d+)/)[1]
    visit "http://other.lvh.me:#{port}/projects/1/contacts"
    expect(page).not_to have_content('Add Contact')
    expect(page).not_to have_button('Logout')
  end

  scenario 'logout redirects away from tenant subdomain' do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    expect(page).to have_content('Contacts')

    click_button 'Logout'
    expect(current_url).to include('www')
    expect(current_url).not_to include('testing.lvh.me')
  end
end
