class AddWorkOrdersToComments < ActiveRecord::Migration[5.0]
  def self.up
    change_table :comments do |t|
      t.references :workorder, index: true, foreign_key: true
    end
  end

  def self.down
    change_table :comments do |t|
      t.remove :task
    end
  end
end
