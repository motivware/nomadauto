class AddUserIdToContacts < ActiveRecord::Migration[7.0]
  def change
    add_reference :contacts, :user, foreign_key: true
  end
end
