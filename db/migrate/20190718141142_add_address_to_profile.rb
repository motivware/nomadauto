# frozen_string_literal: true

class AddAddressToProfile < ActiveRecord::Migration[5.0]
  def change
    add_column :profiles, :street_address, :string
    add_column :profiles, :address_line_two, :string
    add_column :profiles, :city, :string
    add_column :profiles, :state, :string
    add_column :profiles, :zipcode, :string
  end
end
