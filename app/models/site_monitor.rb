# frozen_string_literal: true

class SiteMonitor < ApplicationRecord
  belongs_to :project
  has_many :monitor_runs, foreign_key: :site_monitor_id, dependent: :destroy

  validates :name, presence: true
  validates :url, presence: true, format: { with: /\Ahttps?:\/\// }
  validates :status, inclusion: { in: %w[active paused] }
  validates :interval_minutes, numericality: { greater_than: 0 }

  scope :active, -> { where(status: 'active') }
  scope :due, -> { active.where('last_run_at IS NULL OR last_run_at <= ?', 30.minutes.ago) }

  def last_run
    monitor_runs.order(created_at: :desc).first
  end

  def passing?
    last_run&.status == 'pass'
  end
end
