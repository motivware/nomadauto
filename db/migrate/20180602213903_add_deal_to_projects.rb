# frozen_string_literal: true

class AddDealToProjects < ActiveRecord::Migration[5.0]
  def change
    return unless table_exists?(:projects)
    return unless table_exists?(:deals)
    return if column_exists?(:projects, :deal_id)

    add_reference :projects, :deal, foreign_key: true
  end
end
