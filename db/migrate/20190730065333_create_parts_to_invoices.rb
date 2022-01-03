# frozen_string_literal: true

class CreatePartsToInvoices < ActiveRecord::Migration[5.0]
  def change
    create_table :parts_to_invoices do |t|
      t.references :invoice, foreign_key: true, on_delete: :cascade
      t.references :part, foreign_key: true, on_delete: :cascade

      t.timestamps
    end
  end
end
