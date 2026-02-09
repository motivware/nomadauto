# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe 'Contacts', js: true do
  before do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
  end

  it 'contact list loads properly on page' do
    expect(page).to have_content('Contacts')
    expect(page).to have_content('Add Contact')
  end
end
