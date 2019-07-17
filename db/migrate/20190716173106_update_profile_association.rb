class UpdateProfileAssociation < ActiveRecord::Migration[5.0]
  def change
    add_reference :profiles, :project, foreign_key: true
  end
end
