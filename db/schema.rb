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

ActiveRecord::Schema.define(version: 20170420211854) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.integer  "brewery_id",  null: false
    t.float    "abv",         null: false
    t.float    "ibu",         null: false
    t.string   "style",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["brewery_id"], name: "index_beers_on_brewery_id", using: :btree
  end

  create_table "breweries", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "style",      null: false
    t.string   "country",    null: false
    t.string   "city",       null: false
    t.string   "state",      null: false
    t.string   "fb"
    t.string   "ig"
    t.string   "twitter"
    t.string   "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_breweries_on_name", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "f_name",          null: false
    t.string   "l_name",          null: false
    t.text     "about"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
