class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :street_address
      t.string :address_line_two
      t.string :city
      t.string :state
      t.string :zipcode
      t.timestamps
    end
  end
end
