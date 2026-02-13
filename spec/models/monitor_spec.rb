# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SiteMonitor, type: :model do
  let(:user) do
    User.find_by(email: 'damon-user@test.com') || begin
      plan = Plan.find_or_create_by!(id: 2) { |p| p.name = 'pro'; p.price = 49 }
      u = User.new(name: 'Damon Clark', email: 'damon-user@test.com', password: 'password',
                   plan_id: plan.id, activated: true, activated_at: Time.zone.now, subdomain: 'testing')
      u.save(validate: false)
      u.update_column(:activation_digest, nil)
      u
    end
  end

  let(:project) do
    user.projects.first || Project.create!(title: 'Demo Shop', details: 'Test', user_id: user.id)
  end

  describe '.due' do
    after { project.site_monitors.destroy_all }

    it 'includes active monitors that have never run' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'active')
      expect(SiteMonitor.due).to include(monitor)
    end

    it 'excludes active monitors that ran within their interval' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'active', interval_minutes: 30, last_run_at: 5.minutes.ago)
      expect(SiteMonitor.due).not_to include(monitor)
    end

    it 'includes active monitors past their interval' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'active', interval_minutes: 30, last_run_at: 35.minutes.ago)
      expect(SiteMonitor.due).to include(monitor)
    end

    it 'respects each monitor individual interval' do
      fast = project.site_monitors.create!(name: 'Fast', url: 'https://example.com', status: 'active', interval_minutes: 5, last_run_at: 6.minutes.ago)
      slow = project.site_monitors.create!(name: 'Slow', url: 'https://example.com', status: 'active', interval_minutes: 60, last_run_at: 6.minutes.ago)
      due = SiteMonitor.due
      expect(due).to include(fast)
      expect(due).not_to include(slow)
    end

    it 'excludes paused monitors' do
      monitor = project.site_monitors.create!(name: 'Test', url: 'https://example.com', status: 'paused')
      expect(SiteMonitor.due).not_to include(monitor)
    end
  end
end
