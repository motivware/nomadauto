# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2026_02_12_211619) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customer_contacts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "comments"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "invites", id: :serial, force: :cascade do |t|
    t.string "email"
    t.integer "user_group_id"
    t.integer "sender_id"
    t.integer "recipient_id"
    t.string "token"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "subdomain"
    t.integer "project_id"
    t.index ["project_id"], name: "index_invites_on_project_id"
  end

  create_table "monitor_runs", force: :cascade do |t|
    t.bigint "site_monitor_id", null: false
    t.string "status", null: false
    t.integer "duration_ms"
    t.text "error_message"
    t.datetime "started_at", null: false
    t.datetime "completed_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_monitor_id", "created_at"], name: "index_monitor_runs_on_site_monitor_id_and_created_at"
    t.index ["site_monitor_id"], name: "index_monitor_runs_on_site_monitor_id"
  end

  create_table "plans", id: :serial, force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "projects", id: :serial, force: :cascade do |t|
    t.string "title"
    t.string "details"
    t.integer "user_id"
  end

  create_table "site_monitors", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.string "name", null: false
    t.string "url", null: false
    t.jsonb "steps", default: [], null: false
    t.integer "interval_minutes", default: 30, null: false
    t.string "status", default: "active", null: false
    t.datetime "last_run_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id", "status"], name: "index_site_monitors_on_project_id_and_status"
    t.index ["project_id"], name: "index_site_monitors_on_project_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "password_digest"
    t.string "remember_digest"
    t.boolean "admin", default: false
    t.string "activation_digest"
    t.boolean "activated", default: false
    t.datetime "activated_at", precision: nil
    t.string "reset_digest"
    t.datetime "reset_sent_at", precision: nil
    t.integer "plan_id"
    t.string "stripe_customer_token"
    t.string "subdomain"
    t.integer "invite_id"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "invites", "projects"
  add_foreign_key "monitor_runs", "site_monitors"
  add_foreign_key "site_monitors", "projects"
end
