# frozen_string_literal: true

class AddUseridToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :user_id, :integer
  end
end
