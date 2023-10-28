class AddContactIdToQuestionnaires < ActiveRecord::Migration[7.0]
  def change
    add_reference :questionnaires, :contact, foreign_key: true
  end
end
