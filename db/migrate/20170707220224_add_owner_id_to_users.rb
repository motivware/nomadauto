# frozen_string_literal: true

class AddOwnerIdToUsers < ActiveRecord::Migration[5.0]
  def change
    return unless table_exists?(:accounts)
    return if column_exists?(:accounts, :owner_id)

    add_column :accounts, :owner_id, :integer
  end
end
