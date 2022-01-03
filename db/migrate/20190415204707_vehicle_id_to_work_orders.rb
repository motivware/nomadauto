# frozen_string_literal: true

class VehicleIdToWorkOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :workorders, :vehicle, foreign_key: true
  end
end
