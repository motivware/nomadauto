# frozen_string_literal: true

class AddOwnerIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :accounts, :owner_id, :integer
  end
end
