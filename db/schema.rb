# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_30_182215) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", id: :serial, force: :cascade do |t|
    t.string "subdomain"
    t.string "owner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "owner_id"
    t.integer "user_id"
  end

  create_table "activities", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "action"
    t.string "trackable_type"
    t.integer "trackable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable_type_and_trackable_id"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "comments", id: :serial, force: :cascade do |t|
    t.text "body"
    t.integer "task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "owner"
    t.integer "workorder_id"
    t.index ["task_id"], name: "index_comments_on_task_id"
    t.index ["workorder_id"], name: "index_comments_on_workorder_id"
  end

  create_table "contacts", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customers", id: :serial, force: :cascade do |t|
    t.string "company"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "website"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "project_id"
    t.integer "user_id"
    t.integer "workorder_id"
    t.index ["project_id"], name: "index_customers_on_project_id"
    t.index ["workorder_id"], name: "index_customers_on_workorder_id"
  end

  create_table "deals", id: :serial, force: :cascade do |t|
    t.string "company"
    t.string "status"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "project_id"
    t.index ["project_id"], name: "index_deals_on_project_id"
  end

  create_table "invites", id: :serial, force: :cascade do |t|
    t.string "email"
    t.integer "user_group_id"
    t.integer "sender_id"
    t.integer "recipient_id"
    t.string "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "subdomain"
    t.integer "project_id"
    t.index ["project_id"], name: "index_invites_on_project_id"
  end

  create_table "invoices", id: :serial, force: :cascade do |t|
    t.date "date"
    t.integer "subtotal"
    t.integer "otherfees"
    t.integer "salestax"
    t.integer "total"
    t.integer "paid"
    t.integer "due"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "project_id"
    t.integer "workorder_id"
    t.integer "customer_id"
    t.integer "vehicle_id"
    t.integer "part_id"
    t.index ["customer_id"], name: "index_invoices_on_customer_id"
    t.index ["part_id"], name: "index_invoices_on_part_id"
    t.index ["project_id"], name: "index_invoices_on_project_id"
    t.index ["vehicle_id"], name: "index_invoices_on_vehicle_id"
    t.index ["workorder_id"], name: "index_invoices_on_workorder_id"
  end

  create_table "invoices_parts", id: false, force: :cascade do |t|
    t.integer "invoice_id"
    t.integer "part_id"
    t.index ["invoice_id"], name: "index_invoices_parts_on_invoice_id"
    t.index ["part_id"], name: "index_invoices_parts_on_part_id"
  end

  create_table "maintenances", id: :serial, force: :cascade do |t|
    t.string "desc"
    t.string "mileage"
    t.boolean "oem"
    t.string "repair_difficulty"
    t.decimal "repair_hours"
    t.decimal "labor_rate_per_hour"
    t.decimal "part_cost"
    t.decimal "labor_cost"
    t.decimal "misc_cost"
    t.decimal "total_cost"
    t.string "manufacturer"
    t.decimal "part_price"
    t.string "part_qaunity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "project_id"
    t.string "part_desc"
    t.index ["project_id"], name: "index_maintenances_on_project_id"
  end

  create_table "parts", id: :serial, force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.integer "vehicle_id"
    t.integer "project_id"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "quantity"
    t.string "part_number"
    t.index ["project_id"], name: "index_parts_on_project_id"
    t.index ["vehicle_id"], name: "index_parts_on_vehicle_id"
  end

  create_table "parts_to_invoices", id: :serial, force: :cascade do |t|
    t.integer "invoice_id"
    t.integer "part_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["invoice_id"], name: "index_parts_to_invoices_on_invoice_id"
    t.index ["part_id"], name: "index_parts_to_invoices_on_part_id"
  end

  create_table "plans", id: :serial, force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "contact_email"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.integer "project_id"
    t.string "street_address"
    t.string "address_line_two"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.index ["project_id"], name: "index_profiles_on_project_id"
  end

  create_table "projects", id: :serial, force: :cascade do |t|
    t.string "title"
    t.string "details"
    t.integer "user_id"
    t.integer "task_id"
    t.integer "deal_id"
    t.integer "company_id"
    t.index ["company_id"], name: "index_projects_on_company_id"
    t.index ["deal_id"], name: "index_projects_on_deal_id"
    t.index ["task_id"], name: "index_projects_on_task_id"
  end

  create_table "user_groups", id: :serial, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "remember_digest"
    t.boolean "admin", default: false
    t.string "activation_digest"
    t.boolean "activated", default: false
    t.datetime "activated_at"
    t.string "reset_digest"
    t.datetime "reset_sent_at"
    t.integer "plan_id"
    t.string "stripe_customer_token"
    t.string "subdomain"
    t.integer "invite_id"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "vehicles", id: :serial, force: :cascade do |t|
    t.string "vin"
    t.string "make"
    t.string "model"
    t.string "year"
    t.string "miles"
    t.string "engine"
    t.string "license_plate"
    t.string "transmission"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "project_id"
    t.string "manufacturer"
    t.string "trim"
    t.index ["project_id"], name: "index_vehicles_on_project_id"
  end

  create_table "workorders", id: :serial, force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "status"
    t.string "priority"
    t.string "owner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "project_id"
    t.integer "time"
    t.integer "charge"
    t.integer "miles"
    t.integer "vehicle_id"
    t.index ["project_id"], name: "index_workorders_on_project_id"
    t.index ["vehicle_id"], name: "index_workorders_on_vehicle_id"
  end

  add_foreign_key "activities", "users"
  add_foreign_key "comments", "workorders"
  add_foreign_key "comments", "workorders", column: "task_id"
  add_foreign_key "customers", "projects"
  add_foreign_key "customers", "workorders"
  add_foreign_key "deals", "projects"
  add_foreign_key "invites", "projects"
  add_foreign_key "invoices", "customers"
  add_foreign_key "invoices", "projects"
  add_foreign_key "invoices", "vehicles"
  add_foreign_key "invoices", "workorders"
  add_foreign_key "maintenances", "projects"
  add_foreign_key "parts", "projects"
  add_foreign_key "parts", "vehicles"
  add_foreign_key "parts_to_invoices", "invoices"
  add_foreign_key "parts_to_invoices", "parts"
  add_foreign_key "profiles", "projects"
  add_foreign_key "projects", "customers", column: "company_id"
  add_foreign_key "projects", "deals"
  add_foreign_key "projects", "workorders", column: "task_id"
  add_foreign_key "vehicles", "projects"
  add_foreign_key "workorders", "projects"
  add_foreign_key "workorders", "vehicles"
end
