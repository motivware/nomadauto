# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe 'Signup', js: true do
  scenario 'valid basic signup shows no errors' do
    visit signup_path(plan: 1)
    fill_in 'Full Name', with: Faker::Name.first_name + ' ' + Faker::Name.last_name
    fill_in 'Email', with: Faker::Internet.email
    fill_in 'Password', with: 'password'
    fill_in 'Confirm Password', with: 'password'
    fill_in 'Company Name', with: Faker::Lorem.word.downcase
    click_button 'Create Account'
    expect(page).not_to have_selector('#form-errors')
  end

  scenario 'signup with blank fields shows validation errors' do
    visit signup_path(plan: 1)
    click_button 'Create Account'
    expect(page).to have_selector('#form-errors')
    within('#form-errors') do
      expect(page).to have_content("Name can't be blank")
      expect(page).to have_content("Password can't be blank")
    end
  end
end
