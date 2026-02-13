# frozen_string_literal: true

class ChangePhoneToString < ActiveRecord::Migration[5.0]
  def change
    return unless table_exists?(:companies)
    return unless column_exists?(:companies, :phone_number)

    change_column(:companies, :phone_number, :integer)
  end
end
