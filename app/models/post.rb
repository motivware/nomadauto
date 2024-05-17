class Post < ApplicationRecord
  belongs_to :conversation
  belongs_to :author, polymorphic: true

  broadcasts_to :conversation, partial: "users/posts/post" 

  validates :body, presence: true
end
