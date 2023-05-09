# frozen_string_literal: true

class Activity < ApplicationRecord
  belongs_to :project
  belongs_to :user
  belongs_to :ticket
  belongs_to :trackable, polymorphic: true
  include PublicActivity

end
