# frozen_string_literal: true

require 'rails_helper'

RSpec.describe MonitorExecutionJob, type: :job do
  include ActiveJob::TestHelper

  let(:plan) { Plan.find_or_create_by!(id: 2) { |p| p.name = 'pro'; p.price = 49 } }
  let(:user) do
    User.find_or_create_by!(email: 'alert-test@test.com') do |u|
      u.name = 'Alert Tester'
      u.password = 'password'
      u.plan_id = plan.id
      u.activated = true
      u.activated_at = Time.current
      u.subdomain = 'alerttest'
    end
  end
  let(:project) do
    user.projects.first || Project.create!(title: 'Alert Project', details: 'test', user: user)
  end
  let(:monitor) do
    project.site_monitors.create!(
      name: 'Alert Test',
      url: 'https://example.com',
      status: 'active',
      steps: [{ 'action' => 'visit', 'url' => 'https://example.com' }]
    )
  end

  after { monitor.destroy }

  describe 'alert notifications' do
    before do
      allow_any_instance_of(described_class).to receive(:run_steps)
    end

    context 'when monitor passes with no prior alert' do
      it 'does not send any email' do
        expect {
          described_class.perform_now(monitor.id)
        }.not_to have_enqueued_mail(MonitorMailer)
      end
    end

    context 'when monitor fails with no prior alert' do
      before do
        allow_any_instance_of(described_class).to receive(:run_steps).and_raise(StandardError, 'Page not found')
      end

      it 'sends a failure alert email' do
        expect {
          described_class.perform_now(monitor.id)
        }.to have_enqueued_mail(MonitorMailer, :failure_alert)
      end

      it 'sets alerted_at on the monitor' do
        described_class.perform_now(monitor.id)
        expect(monitor.reload.alerted_at).to be_present
      end
    end

    context 'when monitor fails with existing alerted_at' do
      before do
        monitor.update_column(:alerted_at, 1.hour.ago)
        allow_any_instance_of(described_class).to receive(:run_steps).and_raise(StandardError, 'Page not found')
      end

      it 'does not send a duplicate failure email' do
        expect {
          described_class.perform_now(monitor.id)
        }.not_to have_enqueued_mail(MonitorMailer)
      end
    end

    context 'when monitor passes after a failure (recovery)' do
      before do
        monitor.update_column(:alerted_at, 1.hour.ago)
      end

      it 'sends a recovery alert email' do
        expect {
          described_class.perform_now(monitor.id)
        }.to have_enqueued_mail(MonitorMailer, :recovery_alert)
      end

      it 'clears alerted_at on the monitor' do
        described_class.perform_now(monitor.id)
        expect(monitor.reload.alerted_at).to be_nil
      end
    end
  end
end
