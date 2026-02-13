class CreateMonitorRuns < ActiveRecord::Migration[7.0]
  def change
    create_table :monitor_runs do |t|
      t.references :monitor, null: false, foreign_key: true
      t.string :status, null: false
      t.integer :duration_ms
      t.text :error_message
      t.datetime :started_at, null: false
      t.datetime :completed_at, null: false

      t.timestamps
    end
    add_index :monitor_runs, [:monitor_id, :created_at]
  end
end
