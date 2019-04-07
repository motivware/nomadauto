class Part < ApplicationRecord
  belongs_to :vehicle
  belongs_to :project

  has_one :invoice
end
