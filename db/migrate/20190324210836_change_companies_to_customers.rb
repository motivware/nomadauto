# frozen_string_literal: true

class ChangeCompaniesToCustomers < ActiveRecord::Migration[5.0]
  def change
    rename_table :companies, :customers
  end
end
