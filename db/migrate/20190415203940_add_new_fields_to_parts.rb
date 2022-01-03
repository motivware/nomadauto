# frozen_string_literal: true

class AddNewFieldsToParts < ActiveRecord::Migration[5.0]
  def change
    add_column :parts, :quantity, :integer
    add_column :parts, :part_number, :string
  end
end
