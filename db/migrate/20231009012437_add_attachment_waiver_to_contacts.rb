class AddAttachmentWaiverToContacts < ActiveRecord::Migration[7.0]
  def up
    add_attachment :contacts, :waiver
  end

  def down
    remove_attachment :contacts, :waiver
  end
end
