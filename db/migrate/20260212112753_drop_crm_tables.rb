# frozen_string_literal: true

class DropCrmTables < ActiveRecord::Migration[7.0]
  def up
    tables_to_drop = %i[
      responses answers questions questionnaires
      articles collections
      items columns comments tasks
      notes addresses posts conversations contacts
      tickets deals profiles activities
      chats chatrooms
      cards lists
      action_text_rich_texts
      active_storage_variant_records active_storage_attachments active_storage_blobs
      action_mailbox_inbound_emails
    ]

    # Remove all foreign keys referencing tables we're about to drop
    tables_to_drop.each do |table|
      next unless table_exists?(table)

      # Remove FKs from other tables pointing TO this table
      connection.tables.each do |source_table|
        foreign_keys(source_table).each do |fk|
          if fk.to_table.to_s == table.to_s
            remove_foreign_key source_table, name: fk.name
          end
        end
      end
    end

    # Also remove FKs from projects to tables being dropped
    remove_foreign_key :projects, column: :task_id if foreign_key_exists?(:projects, column: :task_id)
    remove_foreign_key :projects, column: :deal_id if foreign_key_exists?(:projects, column: :deal_id)

    # Now drop all tables
    tables_to_drop.each do |table|
      drop_table table, if_exists: true
    end

    # Remove stale columns from projects
    remove_column :projects, :task_id if column_exists?(:projects, :task_id)
    remove_column :projects, :deal_id if column_exists?(:projects, :deal_id)
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end

  private

  def foreign_keys(table)
    connection.foreign_keys(table)
  rescue StandardError
    []
  end
end
