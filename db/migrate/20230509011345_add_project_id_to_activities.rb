class AddProjectIdToActivities < ActiveRecord::Migration[7.0]
  def change
    add_reference :activities, :project, foreign_key: true
  end
end
