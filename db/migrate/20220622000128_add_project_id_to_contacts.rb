class AddProjectIdToContacts < ActiveRecord::Migration[6.0]
  def change
    add_reference :contacts, :project, foreign_key: true
  end
end
