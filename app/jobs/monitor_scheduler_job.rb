# frozen_string_literal: true

class MonitorSchedulerJob < ApplicationJob
  queue_as :default

  def perform
    SiteMonitor.due.find_each do |monitor|
      MonitorExecutionJob.perform_later(monitor.id)
    end
  end
end
