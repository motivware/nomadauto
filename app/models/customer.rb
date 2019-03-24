class Customer < ApplicationRecord

  belongs_to :user
  belongs_to :project

  has_many :vehicles

end
