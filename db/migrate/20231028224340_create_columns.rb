class CreateColumns < ActiveRecord::Migration[7.0]
  def change
    create_table :columns do |t|
      t.belongs_to :tasks, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
