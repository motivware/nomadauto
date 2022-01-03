# frozen_string_literal: true

class AddReferencesToInvoices < ActiveRecord::Migration[5.0]
  def change
    add_reference :invoices, :project, foreign_key: true
    add_reference :invoices, :workorder, foreign_key: true
  end
end
