# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe Visitor, driver: :selenium_chrome, js: true do
  scenario 'subscirbes to email notifications' do
    visit root_path
    fill_in 'email', with: 'user@test.com'
    click_button 'Get Early Access'
    expect(page).to have_text('A simple to-do list.')
  end
end
