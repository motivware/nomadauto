class AddAttachmentIntakeFormAndContractsToContacts < ActiveRecord::Migration[7.0]
  def up
    add_attachment :contacts, :intake_form
    add_attachment :contacts, :contract
  end

  def down
    remove_attachment :contacts, :intake_form
    remove_attachment :contacts, :contract
  end
end
