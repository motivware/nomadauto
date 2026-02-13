# frozen_string_literal: true

class AddUserIdToAccounts < ActiveRecord::Migration[5.0]
  def change
    return unless table_exists?(:accounts)
    return if column_exists?(:accounts, :user_id)

    add_column :accounts, :user_id, :integer
  end
end
