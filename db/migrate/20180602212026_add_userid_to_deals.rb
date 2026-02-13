# frozen_string_literal: true

class AddUseridToDeals < ActiveRecord::Migration[5.0]
  def change
    return unless table_exists?(:deals)
    return if column_exists?(:deals, :user_id)

    add_column :deals, :user_id, :integer
  end
end
