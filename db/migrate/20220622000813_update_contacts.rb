class UpdateContacts < ActiveRecord::Migration[6.0]
  def change
    remove_column :contacts, :name, :string
    remove_column :contacts, :email, :string
    remove_column :contacts, :comments, :string
    add_column :contacts, :company, :string
    add_column :contacts, :first_name, :string
    add_column :contacts, :last_name, :string
    add_column :contacts, :phone_number, :string
    add_column :contacts, :website, :string
    add_column :contacts, :email, :string
  end
end
