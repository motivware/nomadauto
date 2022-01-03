# frozen_string_literal: true

class Part < ApplicationRecord
  belongs_to :vehicle
  belongs_to :project

  has_many :parts_to_invoices, dependent: :destroy

  has_one :invoice
end
