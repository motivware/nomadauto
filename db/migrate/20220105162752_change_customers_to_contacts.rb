class ChangeCustomersToContacts < ActiveRecord::Migration[5.2]
  def change
    rename_table :customers, :contacts
  end
end
