# frozen_string_literal: true

class AddCustomerIdToInvoices < ActiveRecord::Migration[5.0]
  def change
    add_reference :invoices, :customer, foreign_key: true
  end
end
