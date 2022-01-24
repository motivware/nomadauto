# frozen_string_literal: true

class AddSubdomainToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :subdomain, :string
  end
end
