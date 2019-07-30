class Part < ApplicationRecord
  belongs_to :vehicle
  belongs_to :project

  has_many :parts_to_invoices

  has_one :invoice
end
