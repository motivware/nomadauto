# frozen_string_literal: true

class AddProjectidToDeals < ActiveRecord::Migration[5.0]
  def change
    return unless table_exists?(:deals)
    return if column_exists?(:deals, :project_id)

    if table_exists?(:projects)
      add_reference :deals, :project, foreign_key: true
    else
      add_column :deals, :project_id, :integer
    end
  end
end
