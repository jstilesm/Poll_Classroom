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

ActiveRecord::Schema.define(version: 2020_11_11_230756) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "groups", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_groups_on_user_id"
  end

  create_table "mult_responses", force: :cascade do |t|
    t.string "title", null: false
    t.integer "question_options_id", null: false
    t.integer "registerable_id", null: false
    t.string "registerable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_options_id"], name: "index_mult_responses_on_question_options_id"
    t.index ["registerable_id"], name: "index_mult_responses_on_registerable_id"
  end

  create_table "question_options", force: :cascade do |t|
    t.string "label", null: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "correct", default: false, null: false
    t.index ["question_id"], name: "index_question_options_on_question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "title", null: false
    t.integer "response_limit", default: 1, null: false
    t.boolean "allow_unregistered", default: false, null: false
    t.integer "author_id", null: false
    t.string "kind", null: false
    t.integer "group_id"
    t.boolean "closed", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_questions_on_author_id"
    t.index ["group_id"], name: "index_questions_on_group_id"
  end

  create_table "responses", force: :cascade do |t|
    t.string "body"
    t.integer "question_options_id"
    t.integer "question_id", null: false
    t.integer "registerable_id", null: false
    t.string "registerable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_responses_on_question_id"
    t.index ["question_options_id"], name: "index_responses_on_question_options_id"
    t.index ["registerable_id"], name: "index_responses_on_registerable_id"
  end

  create_table "text_responses", force: :cascade do |t|
    t.string "body", null: false
    t.integer "registerable_id", null: false
    t.string "registerable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["registerable_id"], name: "index_text_responses_on_registerable_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "visitors", force: :cascade do |t|
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.index ["session_token"], name: "index_visitors_on_session_token", unique: true
  end

end
