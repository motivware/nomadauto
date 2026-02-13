class RenamMonitorsToSiteMonitors < ActiveRecord::Migration[7.0]
  def change
    rename_table :monitors, :site_monitors
    rename_column :monitor_runs, :monitor_id, :site_monitor_id
  end
end
