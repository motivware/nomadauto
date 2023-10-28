class ChangeNotesToComments < ActiveRecord::Migration[7.0]
  def change
    rename_column :contacts, :notes, :comment
  end
end
