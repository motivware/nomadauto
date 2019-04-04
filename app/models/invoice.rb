class Invoice < ApplicationRecord

  belongs_to :project
  has_many :workorders

  has_one :customer
  has_one :vehicle

end
