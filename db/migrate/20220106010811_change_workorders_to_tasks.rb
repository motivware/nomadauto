class ChangeWorkordersToTasks < ActiveRecord::Migration[5.2]
  def change
    rename_table :workorders, :tasks
  end
end
