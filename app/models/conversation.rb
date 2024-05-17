class Conversation < ApplicationRecord
  belongs_to :project
  belongs_to :contact
  has_many :posts

  broadcasts_to    ->(c) { "conversations" }, inserts_by: :prepend, targets: "conversations"

  def authors
      posts.includes(:author).map(&:author).uniq
  end
end
