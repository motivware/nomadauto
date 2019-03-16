class Vehicle < ApplicationRecord
  validates :vin, presence: true
end
