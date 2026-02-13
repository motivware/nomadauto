# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe 'Subscriber', js: true do
  scenario 'landing page loads successfully' do
    visit root_path
    expect(page).to have_content('SynthMonitor')
  end
end
