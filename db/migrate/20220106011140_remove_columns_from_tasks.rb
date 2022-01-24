class RemoveColumnsFromTasks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :vehicle_id
  end
end
