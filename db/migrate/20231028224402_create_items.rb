class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.belongs_to :column, null: false, foreign_key: true

      t.timestamps
    end
  end
end
