class Vehicle < ApplicationRecord
  validates :make, presence: true
end
