# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe Visitor, driver: :selenium_chrome, js: true do
  scenario 'subscirbes to email notifications' do
    visit root_path
    fill_in 'visitor_email', with: Faker::Internet.email
    click_button 'Notify me'
  end
end
