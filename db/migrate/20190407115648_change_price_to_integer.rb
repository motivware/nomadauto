class ChangePriceToInteger < ActiveRecord::Migration[5.0]
  def change
    change_column :parts, :price, :integer, using: 'price::integer'
  end
end
