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

ActiveRecord::Schema.define(version: 20190401021214) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "subdomain"
    t.string   "owner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "owner_id"
    t.integer  "user_id"
  end

  create_table "activities", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "action"
    t.string   "trackable_type"
    t.integer  "trackable_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable_type_and_trackable_id", using: :btree
    t.index ["user_id"], name: "index_activities_on_user_id", using: :btree
  end

  create_table "cards", force: :cascade do |t|
    t.integer  "list_id"
    t.string   "name"
    t.integer  "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_cards_on_list_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body"
    t.integer  "task_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "owner"
    t.integer  "workorder_id"
    t.index ["task_id"], name: "index_comments_on_task_id", using: :btree
    t.index ["workorder_id"], name: "index_comments_on_workorder_id", using: :btree
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.text     "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string   "company"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone_number"
    t.string   "website"
    t.string   "email"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "project_id"
    t.integer  "user_id"
    t.index ["project_id"], name: "index_customers_on_project_id", using: :btree
  end

  create_table "deals", force: :cascade do |t|
    t.string   "company"
    t.string   "status"
    t.integer  "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "project_id"
    t.index ["project_id"], name: "index_deals_on_project_id", using: :btree
  end

  create_table "invites", force: :cascade do |t|
    t.string   "email"
    t.integer  "user_group_id"
    t.integer  "sender_id"
    t.integer  "recipient_id"
    t.string   "token"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "subdomain"
    t.integer  "project_id"
    t.index ["project_id"], name: "index_invites_on_project_id", using: :btree
  end

  create_table "invoices", force: :cascade do |t|
    t.date     "date"
    t.integer  "subtotal"
    t.integer  "otherfees"
    t.integer  "salestax"
    t.integer  "total"
    t.integer  "paid"
    t.integer  "due"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "project_id"
    t.integer  "workorder_id"
    t.integer  "customer_id"
    t.integer  "vehicle_id"
    t.index ["customer_id"], name: "index_invoices_on_customer_id", using: :btree
    t.index ["project_id"], name: "index_invoices_on_project_id", using: :btree
    t.index ["vehicle_id"], name: "index_invoices_on_vehicle_id", using: :btree
    t.index ["workorder_id"], name: "index_invoices_on_workorder_id", using: :btree
  end

  create_table "lists", force: :cascade do |t|
    t.string   "new"
    t.integer  "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "plans", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone_number"
    t.string   "contact_email"
    t.text     "description"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "projects", force: :cascade do |t|
    t.string  "title"
    t.string  "details"
    t.integer "user_id"
    t.integer "task_id"
    t.integer "deal_id"
    t.integer "company_id"
    t.index ["company_id"], name: "index_projects_on_company_id", using: :btree
    t.index ["deal_id"], name: "index_projects_on_deal_id", using: :btree
    t.index ["task_id"], name: "index_projects_on_task_id", using: :btree
  end

  create_table "user_groups", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.string   "password_digest"
    t.string   "remember_digest"
    t.boolean  "admin",                 default: false
    t.string   "activation_digest"
    t.boolean  "activated",             default: false
    t.datetime "activated_at"
    t.string   "reset_digest"
    t.datetime "reset_sent_at"
    t.integer  "plan_id"
    t.string   "stripe_customer_token"
    t.string   "subdomain"
    t.integer  "invite_id"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  create_table "vehicles", force: :cascade do |t|
    t.string   "vin"
    t.string   "make"
    t.string   "model"
    t.string   "year"
    t.string   "miles"
    t.string   "engine"
    t.string   "license_plate"
    t.string   "transmission"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "project_id"
    t.index ["project_id"], name: "index_vehicles_on_project_id", using: :btree
  end

  create_table "workorders", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "status"
    t.string   "priority"
    t.string   "owner"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
    t.integer  "project_id"
    t.integer  "time"
    t.integer  "charge"
    t.integer  "miles"
    t.index ["project_id"], name: "index_workorders_on_project_id", using: :btree
  end

  add_foreign_key "activities", "users"
  add_foreign_key "cards", "lists"
  add_foreign_key "comments", "workorders"
  add_foreign_key "comments", "workorders", column: "task_id"
  add_foreign_key "customers", "projects"
  add_foreign_key "deals", "projects"
  add_foreign_key "invites", "projects"
  add_foreign_key "invoices", "customers"
  add_foreign_key "invoices", "projects"
  add_foreign_key "invoices", "vehicles"
  add_foreign_key "invoices", "workorders"
  add_foreign_key "projects", "customers", column: "company_id"
  add_foreign_key "projects", "deals"
  add_foreign_key "projects", "workorders", column: "task_id"
  add_foreign_key "vehicles", "projects"
  add_foreign_key "workorders", "projects"
end
