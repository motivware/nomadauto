class Article < ApplicationRecord
	has_one :collection, foreign_key: 'collection_id'
	belongs_to :project, foreign_key: 'project_id'

	has_rich_text :content

end
