# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Beer.destroy_all
Brewery.destroy_all
name = "beer"
description = "this is a test beer. it tests so good. so testy"
abv = 100.0
ibu = 40.0
style = 'IPA'


brewname = "testbrewery"
style = "Microbrewery"
country = "USA"
city = "NY"
state = "NY"

breweries = []

20.times do |i|
  b = brewname + i.to_s
  breweries << Brewery.create(name: b, style: style, country: country, city: city, state: state)
end

breweries.each_with_index do |el, i|
  c = name + i.to_s
  el.beers.create(name: c, description: description, abv: abv, ibu: ibu, style: style)
end


test_user = User.new(username: "testaccount", password: "password", f_name: "Test", l_name: "Account")
User.create(username: "mealpal", password: "password", f_name: "meal", l_name: "pal")

test_user.save!
