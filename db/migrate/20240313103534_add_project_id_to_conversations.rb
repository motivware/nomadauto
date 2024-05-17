class AddProjectIdToConversations < ActiveRecord::Migration[7.0]
  def change
    add_reference :conversations, :project, foreign_key: true
  end
end
