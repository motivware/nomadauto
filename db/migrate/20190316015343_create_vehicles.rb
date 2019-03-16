class CreateVehicles < ActiveRecord::Migration[5.0]
  def change
    create_table :vehicles do |t|
      t.string :vin
      t.string :make
      t.string :model
      t.string :year
      t.string :miles
      t.string :engine
      t.string :license_plate
      t.string :transmission
      t.timestamps
    end
  end
end
