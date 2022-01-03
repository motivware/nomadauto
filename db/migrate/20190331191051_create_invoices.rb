# frozen_string_literal: true

class CreateInvoices < ActiveRecord::Migration[5.0]
  def change
    create_table :invoices do |t|
      t.date :date
      t.integer :subtotal
      t.integer :otherfees
      t.integer :salestax
      t.integer :total
      t.integer :paid
      t.integer :due
      t.timestamps
    end
  end
end
