# frozen_string_literal: true

class Activity < ApplicationRecord
  belongs_to :project
  belongs_to :user
  belongs_to :ticket, optional: true
  belongs_to :trackable, polymorphic: true
  include PublicActivity

end
