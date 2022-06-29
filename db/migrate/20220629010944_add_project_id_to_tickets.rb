class AddProjectIdToTickets < ActiveRecord::Migration[6.1]
  def change
    add_reference :tickets, :project, foreign_key: true
  end
end
