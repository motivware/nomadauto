class AddPartsToInvoices < ActiveRecord::Migration[5.0]
  def change
    add_reference :invoices, :part, foreign_key: true
  end
end
