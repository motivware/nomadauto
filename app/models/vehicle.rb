# frozen_string_literal: true

class Vehicle < ApplicationRecord
  validates :make, presence: true
  belongs_to :customer
  belongs_to :project
  belongs_to :workorders
  has_many :invoices
  has_many :parts

  def model_make_year
    "#{make.capitalize} #{model.capitalize} #{year}"
  end
end
