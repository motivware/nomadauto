class CreateCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :collections do |t|
      t.string :title
      t.string :heading 
      t.references :articles, index: true, foreign_key: true
      t.timestamps
    end
  end
end
