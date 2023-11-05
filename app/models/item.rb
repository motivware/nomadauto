class Item < ApplicationRecord
  belongs_to :column
  has_rich_text :content
end
