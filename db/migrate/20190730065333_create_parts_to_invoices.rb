class CreatePartsToInvoices < ActiveRecord::Migration[5.0]
  def change
    create_table :parts_to_invoices do |t|
      t.references :invoice, foreign_key: true
      t.references :part, foreign_key: true

      t.timestamps
    end
  end
end
