class CreateMonitors < ActiveRecord::Migration[7.0]
  def change
    create_table :monitors do |t|
      t.references :project, null: false, foreign_key: true
      t.string :name, null: false
      t.string :url, null: false
      t.jsonb :steps, null: false, default: []
      t.integer :interval_minutes, null: false, default: 30
      t.string :status, null: false, default: 'active'
      t.datetime :last_run_at

      t.timestamps
    end
    add_index :monitors, [:project_id, :status]
  end
end
