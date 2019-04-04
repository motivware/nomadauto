class Vehicle < ApplicationRecord
  validates :make, presence: true
  belongs_to :customer
  belongs_to :project
  has_many :invoices
end
