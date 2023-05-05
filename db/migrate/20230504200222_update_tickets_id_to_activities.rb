class UpdateTicketsIdToActivities < ActiveRecord::Migration[7.0]
  def change
    add_reference :activities, :ticket, foreign_key: true
    remove_reference :activities, :tickets, foreign_key: true
  end
end
