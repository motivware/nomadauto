class AddColumnsToWorkorders < ActiveRecord::Migration[5.0]
  def change
    add_column :workorders, :time, :integer
    add_column :workorders, :charge, :integer
  end
end
