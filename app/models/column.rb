class Column < ApplicationRecord
  belongs_to :task
  has_many :items, dependent: :destroy
end
