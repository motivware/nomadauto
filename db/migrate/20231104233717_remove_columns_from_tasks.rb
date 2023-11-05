class RemoveColumnsFromTasks < ActiveRecord::Migration[7.0]
  def change
    remove_column :tasks, :status, :string
    remove_column :tasks, :priority, :string
  end
end
