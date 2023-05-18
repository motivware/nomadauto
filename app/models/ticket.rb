# frozen_string_literal: true

class Ticket < ApplicationRecord
	belongs_to :project
	belongs_to :user
	belongs_to :activity
	
	validates :due_date, :presence => true

  has_rich_text :details
	include PublicActivity
end