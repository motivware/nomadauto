# frozen_string_literal: true

class MonitorExecutionJob < ApplicationJob
  queue_as :monitors

  def perform(monitor_id, force: false)
    monitor = SiteMonitor.find_by(id: monitor_id)
    return unless monitor
    return unless force || monitor.status == 'active'

    started_at = Time.current

    run = begin
      run_steps(monitor)
      duration = ((Time.current - started_at) * 1000).to_i

      monitor.monitor_runs.create!(
        status: 'pass',
        duration_ms: duration,
        started_at: started_at,
        completed_at: Time.current
      )
    rescue StandardError => e
      duration = ((Time.current - started_at) * 1000).to_i

      monitor.monitor_runs.create!(
        status: 'fail',
        duration_ms: duration,
        error_message: e.message.truncate(2000),
        started_at: started_at,
        completed_at: Time.current
      )
    ensure
      monitor.update_column(:last_run_at, Time.current)
    end

    send_alerts(monitor, run)
  end

  private

  def send_alerts(monitor, run)
    return unless run.is_a?(MonitorRun)

    if run.status == 'fail' && monitor.alerted_at.nil?
      MonitorMailer.failure_alert(monitor, run).deliver_later
      monitor.update_column(:alerted_at, Time.current)
    elsif run.status == 'pass' && monitor.alerted_at.present?
      MonitorMailer.recovery_alert(monitor, run).deliver_later
      monitor.update_column(:alerted_at, nil)
    end
  end

  def run_steps(monitor)
    Playwright.create(playwright_cli_executable_path: 'npx playwright') do |playwright|
      browser = playwright.chromium.launch(headless: true)
      page = browser.new_page

      monitor.steps.each do |step|
        execute_step(page, step)
      end

      browser.close
    end
  end

  def execute_step(page, step)
    case step['action']
    when 'visit'
      page.goto(step['url'], waitUntil: 'networkidle')
    when 'click'
      page.click(step['selector'])
    when 'fill_in'
      page.fill(step['selector'], step['value'])
    when 'expect_text'
      content = page.content
      unless content.include?(step['text'])
        raise "Expected text '#{step['text']}' not found on page"
      end
    end
  end
end
