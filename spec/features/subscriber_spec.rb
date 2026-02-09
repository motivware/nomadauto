# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe 'Subscriber', js: true do
  scenario 'subscribes to email notifications' do
    visit root_path
    fill_in 'visitor_email', with: Faker::Internet.email
    click_button 'Notify me'
  end
end
