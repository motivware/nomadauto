class AddAlertedAtToSiteMonitors < ActiveRecord::Migration[7.0]
  def change
    add_column :site_monitors, :alerted_at, :datetime
  end
end
