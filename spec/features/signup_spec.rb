# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe User, driver: :selenium_chrome, js: true do
  scenario 'signup for the application' do
    visit signup_path(plan: 1)
    fill_in 'Full Name', with: Faker::Name.first_name + " " + Faker::Name.last_name
    fill_in 'Email', with: Faker::Internet.email
    fill_in 'Password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'
    fill_in 'Subdomain', with: Faker::Lorem.word
    click_button 'Create my account'
    expect(page).not_to have_css('div.bg-red-50')
  end

  scenario 'signup with invalid information' do
    visit signup_path(plan: 1)
    click_button 'Create my account'
    expect(page).to have_css('ul.list-disc', text: 'Name can\'t be blank')
    expect(page).to have_css('ul.list-disc', text: 'Email can\'t be blank')
    expect(page).to have_css('ul.list-disc', text: 'Email is invalid')
    expect(page).to have_css('ul.list-disc', text: 'Subdomain can\'t be blank')
    expect(page).to have_css('ul.list-disc', text: 'Password can\'t be blank')
  end
end
