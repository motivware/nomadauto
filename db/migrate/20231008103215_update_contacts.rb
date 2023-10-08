class UpdateContacts < ActiveRecord::Migration[7.0]
  def change
    remove_column :contacts, :company
    remove_column :contacts, :website
    add_column :contacts, :start_date, :date
    add_column :contacts, :end_date, :date
    add_column :contacts, :pay_rate, :integer
    add_column :contacts, :status, :string
    add_column :contacts, :notes, :text
  end
end
