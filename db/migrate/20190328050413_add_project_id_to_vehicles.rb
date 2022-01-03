# frozen_string_literal: true

class AddProjectIdToVehicles < ActiveRecord::Migration[5.0]
  def change
    add_reference :vehicles, :project, foreign_key: true
  end
end
