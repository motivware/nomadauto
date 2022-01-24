class RemoveMoreColumnsFromTasks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :time
    remove_column :tasks, :charge
  end
end
