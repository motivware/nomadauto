# frozen_string_literal: true

class CustomerContact < ApplicationRecord
  validates :name, :email, :comments, presence: true
end
