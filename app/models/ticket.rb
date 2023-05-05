# frozen_string_literal: true

class Ticket < ApplicationRecord
	belongs_to :project
	belongs_to :user
	belongs_to :activity
	
  has_rich_text :details
	include PublicActivity
end