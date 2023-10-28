class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :user_id
      t.string :owner
      t.text :body
      t.references :contacts, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
