class AddTicketsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :subject
      t.string :from
      t.string :assigned_to
      t.string :priority
      t.string :status
      t.datetime :due_date 
      t.text :details
      t.timestamps
    end
  end
end
