class UpdateContacts < ActiveRecord::Migration[7.0]
  def change
    remove_column :contacts, :company, if_exists: true
    remove_column :contacts, :website, if_exists: true

    add_column :contacts, :start_date, :date, if_not_exists: true
    add_column :contacts, :end_date, :date, if_not_exists: true
    add_column :contacts, :pay_rate, :integer, if_not_exists: true
    add_column :contacts, :status, :string, if_not_exists: true
    add_column :contacts, :notes, :text, if_not_exists: true
  end
end
