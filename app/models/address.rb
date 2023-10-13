class Address < ApplicationRecord
	belongs_to :contact, foreign_key: 'contact_id'

end