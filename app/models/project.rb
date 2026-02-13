# frozen_string_literal: true

class Project < ApplicationRecord
  belongs_to :user
  has_many :invites, dependent: :destroy
  has_many :site_monitors, dependent: :destroy
end
