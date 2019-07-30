class Invoice < ApplicationRecord

  belongs_to :project

  has_many :workorders
  has_many :parts
  has_many :parts_to_invoices

  has_one :customer
  has_one :vehicle

end
