# frozen_string_literal: true

require 'rails_helper'
require 'capybara/rails'

RSpec.describe 'Monitors', js: true do
  scenario 'user can create and view a monitor' do
    visit login_path
    fill_in 'Email', with: 'damon-user@test.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'

    # Login redirects straight to monitors (single project)
    expect(page).to have_content('Monitors')

    # Create a new monitor
    click_link 'New Monitor', match: :first
    expect(page).to have_content('Test Steps')
    page.find('[data-testid="monitor-name"]').fill_in(with: 'Homepage Check')
    page.find('[data-testid="monitor-url"]').fill_in(with: 'https://example.com')
    page.find('[data-testid="monitor-submit"]').click

    # Should be on show page
    expect(page).to have_content('Homepage Check')
    expect(page).to have_content('https://example.com')
    expect(page).to have_content('active')
    expect(page).to have_button('Run Now')
  end
end
