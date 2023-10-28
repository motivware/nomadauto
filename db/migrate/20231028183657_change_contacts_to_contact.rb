class ChangeContactsToContact < ActiveRecord::Migration[7.0]
  def change
    rename_column :notes, :contacts_id, :contact_id
  end
end
