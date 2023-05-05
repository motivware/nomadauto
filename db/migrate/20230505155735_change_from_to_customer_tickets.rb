class ChangeFromToCustomerTickets < ActiveRecord::Migration[7.0]
  def change
    rename_column :tickets, :from, :customer
  end
end
