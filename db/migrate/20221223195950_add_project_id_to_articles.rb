class AddProjectIdToArticles < ActiveRecord::Migration[6.1]
  def change
    add_reference :articles, :project, foreign_key: true
  end
end
