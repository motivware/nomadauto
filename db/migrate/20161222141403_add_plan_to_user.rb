# frozen_string_literal: true

class AddPlanToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :plan_id, :integer
  end
end
