# frozen_string_literal: true

class Task < ApplicationRecord
  belongs_to :user
  belongs_to :project
  belongs_to :contacts

  has_many :comments, dependent: :destroy

  accepts_nested_attributes_for :comments, reject_if: ->(a) { a[:content].blank? }, allow_destroy: true

  def title_with_charge
    "#{title}: #{charge}"
  end
end
