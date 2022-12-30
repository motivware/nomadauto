class AddCollectionIdToArticles < ActiveRecord::Migration[6.1]
  def change
    add_reference :articles, :collection, foreign_key: true
  end
end
