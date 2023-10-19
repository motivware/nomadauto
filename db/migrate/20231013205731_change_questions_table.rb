class ChangeQuestionsTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :questions, :name_question_type, :question_type
    add_column :questions, :name, :string
  end
end
