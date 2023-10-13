class AddProjectIdToAddresses < ActiveRecord::Migration[7.0]
  def change
    add_reference :addresses, :project, foreign_key: true
  end
end
