# frozen_string_literal: true

class CreateUserGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :user_groups, &:timestamps
  end
end
