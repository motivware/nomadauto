# frozen_string_literal: true

class RenameTasksToWorkOrders < ActiveRecord::Migration[5.0]
  def change
    rename_table :tasks, :workorders
  end
end
