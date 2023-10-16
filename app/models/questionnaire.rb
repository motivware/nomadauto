class Questionnaire < ApplicationRecord
	belongs_to :project
	has_many :questions, dependent: :destroy
	accepts_nested_attributes_for :questions, allow_destroy: true
end


