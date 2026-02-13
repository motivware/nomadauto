# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SiteMonitor, type: :model do
  let(:user) { User.find_by(email: 'damon-user@test.com') }
  let(:project) { user.projects.first }

  describe '.due' do
    after { project.site_monitors.destroy_all }

    it 'includes active monitors that have never run' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'active')
      expect(SiteMonitor.due).to include(monitor)
    end

    it 'excludes active monitors that ran recently' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'active', last_run_at: 5.minutes.ago)
      expect(SiteMonitor.due).not_to include(monitor)
    end

    it 'includes active monitors past their interval' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'active', last_run_at: 35.minutes.ago)
      expect(SiteMonitor.due).to include(monitor)
    end

    it 'excludes paused monitors' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'paused')
      expect(SiteMonitor.due).not_to include(monitor)
    end
  end
end
