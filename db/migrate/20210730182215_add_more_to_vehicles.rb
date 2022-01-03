# frozen_string_literal: true

class AddMoreToVehicles < ActiveRecord::Migration[5.2]
  def change
    add_column :vehicles, :manufacturer, :string
    add_column :vehicles, :trim, :string
  end
end
