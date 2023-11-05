class ChangeTasksToTask < ActiveRecord::Migration[7.0]
  def change
    rename_column :columns, :tasks_id, :task_id
  end
end
