class CreateQuestionnaires < ActiveRecord::Migration[7.0]
  def change
    create_table :questionnaires do |t|
      t.string :name

      t.timestamps
    end
  end
end
