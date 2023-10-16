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

ActiveRecord::Schema[7.0].define(version: 2023_10_15_141635) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_mailbox_inbound_emails", force: :cascade do |t|
    t.integer "status", default: 0, null: false
    t.string "message_id", null: false
    t.string "message_checksum", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id", "message_checksum"], name: "index_action_mailbox_inbound_emails_uniqueness", unique: true
  end

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "activities", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "action"
    t.string "trackable_type"
    t.integer "trackable_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "ticket_id"
    t.bigint "project_id"
    t.index ["project_id"], name: "index_activities_on_project_id"
    t.index ["ticket_id"], name: "index_activities_on_ticket_id"
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable_type_and_trackable_id"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "addresses", force: :cascade do |t|
    t.string "street_address"
    t.string "address_line_two"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "contact_id"
    t.bigint "project_id"
    t.index ["contact_id"], name: "index_addresses_on_contact_id"
    t.index ["project_id"], name: "index_addresses_on_project_id"
  end

  create_table "answers", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "articles", force: :cascade do |t|
    t.string "subject"
    t.string "author"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.bigint "collection_id"
    t.index ["collection_id"], name: "index_articles_on_collection_id"
    t.index ["project_id"], name: "index_articles_on_project_id"
  end

  create_table "cards", force: :cascade do |t|
    t.bigint "list_id", null: false
    t.string "name"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_cards_on_list_id"
  end

  create_table "chatrooms", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.index ["project_id"], name: "index_chatrooms_on_project_id"
  end

  create_table "chats", force: :cascade do |t|
    t.string "message"
    t.string "name"
    t.bigint "chatroom_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chatroom_id"], name: "index_chats_on_chatroom_id"
  end

  create_table "collections", force: :cascade do |t|
    t.string "title"
    t.string "heading"
    t.bigint "articles_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.index ["articles_id"], name: "index_collections_on_articles_id"
    t.index ["project_id"], name: "index_collections_on_project_id"
  end

  create_table "comments", id: :serial, force: :cascade do |t|
    t.text "body"
    t.integer "task_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "owner"
    t.index ["task_id"], name: "index_comments_on_task_id"
  end

  create_table "contacts", id: :serial, force: :cascade do |t|
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.bigint "project_id"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "email"
    t.bigint "user_id"
    t.date "start_date"
    t.date "end_date"
    t.integer "pay_rate"
    t.string "status"
    t.text "notes"
    t.string "waiver_file_name"
    t.string "waiver_content_type"
    t.bigint "waiver_file_size"
    t.datetime "waiver_updated_at"
    t.string "intake_form_file_name"
    t.string "intake_form_content_type"
    t.bigint "intake_form_file_size"
    t.datetime "intake_form_updated_at"
    t.string "contract_file_name"
    t.string "contract_content_type"
    t.bigint "contract_file_size"
    t.datetime "contract_updated_at"
    t.index ["project_id"], name: "index_contacts_on_project_id"
    t.index ["user_id"], name: "index_contacts_on_user_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.string "subject"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "contact_id"
    t.bigint "project_id"
    t.index ["contact_id"], name: "index_conversations_on_contact_id"
    t.index ["project_id"], name: "index_conversations_on_project_id"
  end

  create_table "customer_contacts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "comments"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "deals", id: :serial, force: :cascade do |t|
    t.string "company"
    t.string "status"
    t.integer "value"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
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
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "subdomain"
    t.integer "project_id"
    t.index ["project_id"], name: "index_invites_on_project_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "name"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.index ["project_id"], name: "index_lists_on_project_id"
  end

  create_table "plans", id: :serial, force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "conversation_id", null: false
    t.string "author_type", null: false
    t.bigint "author_id", null: false
    t.string "message_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.index ["author_type", "author_id"], name: "index_posts_on_author"
    t.index ["conversation_id"], name: "index_posts_on_conversation_id"
    t.index ["project_id"], name: "index_posts_on_project_id"
  end

  create_table "profiles", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "contact_email"
    t.text "description"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.bigint "avatar_file_size"
    t.datetime "avatar_updated_at", precision: nil
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
    t.index ["deal_id"], name: "index_projects_on_deal_id"
    t.index ["task_id"], name: "index_projects_on_task_id"
  end

  create_table "questionnaires", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.index ["project_id"], name: "index_questionnaires_on_project_id"
  end

  create_table "questions", force: :cascade do |t|
    t.bigint "questionnaire_id", null: false
    t.integer "question_type"
    t.boolean "required"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["questionnaire_id"], name: "index_questions_on_questionnaire_id"
  end

  create_table "tasks", id: :serial, force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "status"
    t.string "priority"
    t.string "owner"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "user_id"
    t.integer "project_id"
    t.index ["project_id"], name: "index_tasks_on_project_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.string "subject"
    t.string "customer"
    t.string "assigned_to"
    t.string "priority"
    t.string "status"
    t.text "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.bigint "author_id"
    t.bigint "contact_id"
    t.datetime "due_date", precision: nil
    t.bigint "user_id"
    t.index ["author_id"], name: "index_tickets_on_author_id"
    t.index ["contact_id"], name: "index_tickets_on_contact_id"
    t.index ["project_id"], name: "index_tickets_on_project_id"
    t.index ["user_id"], name: "index_tickets_on_user_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "activities", "projects"
  add_foreign_key "activities", "tickets"
  add_foreign_key "activities", "users"
  add_foreign_key "addresses", "contacts"
  add_foreign_key "addresses", "projects"
  add_foreign_key "answers", "questions"
  add_foreign_key "articles", "collections"
  add_foreign_key "articles", "projects"
  add_foreign_key "cards", "lists"
  add_foreign_key "chatrooms", "projects"
  add_foreign_key "chats", "chatrooms"
  add_foreign_key "collections", "articles", column: "articles_id"
  add_foreign_key "collections", "projects"
  add_foreign_key "comments", "tasks"
  add_foreign_key "contacts", "projects"
  add_foreign_key "contacts", "users"
  add_foreign_key "conversations", "contacts"
  add_foreign_key "conversations", "projects"
  add_foreign_key "deals", "projects"
  add_foreign_key "invites", "projects"
  add_foreign_key "lists", "projects"
  add_foreign_key "posts", "conversations"
  add_foreign_key "posts", "projects"
  add_foreign_key "profiles", "projects"
  add_foreign_key "projects", "deals"
  add_foreign_key "projects", "tasks"
  add_foreign_key "questionnaires", "projects"
  add_foreign_key "questions", "questionnaires"
  add_foreign_key "tasks", "projects"
  add_foreign_key "tickets", "contacts"
  add_foreign_key "tickets", "projects"
  add_foreign_key "tickets", "users"
  add_foreign_key "tickets", "users", column: "author_id"
end
