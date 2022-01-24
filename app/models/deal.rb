# frozen_string_literal: true

class Deal < ApplicationRecord
  belongs_to :user
  belongs_to :project
end
