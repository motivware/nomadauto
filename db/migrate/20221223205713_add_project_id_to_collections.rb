class AddProjectIdToCollections < ActiveRecord::Migration[6.1]
  def change
    add_reference :collections, :project, foreign_key: true
  end
end
