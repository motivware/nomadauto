class AddVehicleIdToInvoices < ActiveRecord::Migration[5.0]
  def change
    add_reference :invoices, :vehicle, foreign_key: true
  end
end
