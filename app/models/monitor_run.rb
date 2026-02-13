# frozen_string_literal: true

class MonitorRun < ApplicationRecord
  belongs_to :site_monitor

  validates :status, inclusion: { in: %w[pass fail] }
  validates :started_at, presence: true
  validates :completed_at, presence: true

  scope :recent, -> { order(created_at: :desc) }
end
