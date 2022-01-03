# frozen_string_literal: true

class CreateParts < ActiveRecord::Migration[5.0]
  def change
    create_table :parts do |t|
      t.text :name
      t.text :description
      t.references :vehicle, foreign_key: true
      t.references :project, foreign_key: true
      t.string :price

      t.timestamps
    end
  end
end
