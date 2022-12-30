class Collection < ApplicationRecord
	has_many :articles
	belongs_to :project
end
