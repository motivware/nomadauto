class CustomerIdToWorkOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :customers, :workorder, foreign_key: true
  end
end
