# frozen_string_literal: true

class MonitorMailer < ApplicationMailer
  def failure_alert(monitor, run)
    @monitor = monitor
    @run = run
    @user = monitor.project.user

    mail to: @user.email, subject: "Monitor failing: #{monitor.name}"
  end

  def recovery_alert(monitor, run)
    @monitor = monitor
    @run = run
    @user = monitor.project.user
    @downtime = distance_of_time_in_words(monitor.alerted_at, Time.current)

    mail to: @user.email, subject: "Monitor recovered: #{monitor.name}"
  end
end
