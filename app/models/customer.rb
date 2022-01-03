# frozen_string_literal: true

class Customer < ApplicationRecord
  belongs_to :user
  belongs_to :project

  has_many :vehicles
  has_many :invoices
  has_many :workorders

  def first_last_name
    "#{first_name.capitalize} #{last_name.capitalize}"
  end
end
