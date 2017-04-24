# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
# Beer.destroy_all
# Brewery.destroy_all
# name = "beer"
# description = "this is a test beer. it tests so good. so testy Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null, sunt in culpa qui officia deserunt mollit anim id est laborum."
# abv = 100.0
# ibu = 40.0
# beer_style = 'IPA'
#
#
# brewname = "testbrewery"
# style = "Microbrewery"
# country = "USA"
# city = "NY"
# state = "NY"
#
# breweries = []
#
# 20.times do |i|
#   b = brewname + i.to_s
#   breweries << Brewery.create(name: b, style: style, country: country, city: city, state: state)
# end
#
# breweries.each_with_index do |el, i|
#   c = name + i.to_s
#   el.beers.create(name: c, description: description, abv: abv, ibu: ibu, style: beer_style)
# end
#
#
# test_user = User.new(username: "testaccount", password: "password", f_name: "Test", l_name: "Account")
# User.create(username: "mealpal", password: "password", f_name: "meal", l_name: "pal")
#
# test_user.save!

User.destroy_all
Beer.destroy_all
Brewery.destroy_all
Checkin.destroy_all


breweries = []

test_user = User.new(username: "testaccount", password: "password", f_name: "Test", l_name: "Account")
User.create(username: "mealpal", password: "password", f_name: "meal", l_name: "pal")


test_user.save!

brewery_style = ["Microbrewery", "Macrobrewery", "Farmhouse"]


20.times do |x|
  breweries << Brewery.create(name: Faker::Company.unique.name, style: brewery_style.sample, country: 'USA', city: Faker::Address.city, state: Faker::Address.state)
end


breweries.each do |x|
  x.beers.create!(name: Faker::Beer.unique.name, abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: Faker::Beer.style, description: "THIS IS SUCH AGOOdod vbaeeer and description")
end

rate2 = [1,2,3,4,5]
container2 = ["can", "bottle", "draft"]

userarray = []
10.times do |x|
  userarray << User.create!(username: Faker::Name.last_name, password: "password", f_name: Faker::Name.first_name, l_name: Faker::Friends.character)

end



Beer.all.each do |x|
  # debugger
  x.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: Faker::ChuckNorris.fact, container: container2.sample)
end
