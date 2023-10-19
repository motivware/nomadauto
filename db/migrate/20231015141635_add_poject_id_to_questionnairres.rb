class AddPojectIdToQuestionnairres < ActiveRecord::Migration[7.0]
  def change
    add_reference :questionnaires, :project, foreign_key: true
  end
end
