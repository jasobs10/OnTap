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
#beer avatars
allcitraavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/allcitra.jpeg')
budavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/bud.jpeg')
budlightavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/beer-3784_0e2c3_sm.jpeg')
consecrationavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/consecration.jpeg')
brocolliavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/broccoli.jpeg')
damnnationavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/damnation.jpeg')
doublecitravatar = open('https://s3.amazonaws.com/on-tap-dev/beers/doublecitra.jpeg')
doublenegativeavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/doublenegative.jpeg')
headytopperavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/headytopper.jpeg')
greenavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/green.jpeg')
focalbangeravatar = open('https://s3.amazonaws.com/on-tap-dev/beers/focalbanger.jpeg')
hazeavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/haze.jpeg')
shortdarkavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/shortanddark.jpeg')
mylaravatar = open('https://s3.amazonaws.com/on-tap-dev/beers/mylarbags.jpeg')
madfatavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/madfat.jpeg')
substanceavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/substance.jpeg')
juliusavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/julius.jpeg')
tesseractavatar = open('https://s3.amazonaws.com/on-tap-dev/beers/tesseract.jpeg')



#breweryavatars
alchemistavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/alchemist.jpeg')
bisselavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/bissel.jpeg')
russianriveravatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/brewery-russianRiver.jpg')
grimmavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/grimm.jpeg')
hillfarmsteadavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/hillfarmstead.jpeg')
interbotoavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/interboro.jpeg')
otherhalfavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/otherhalf.jpeg')
tiredhandsavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/tiredhands.jpeg')
treehouseavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/treehouse.jpeg')
trilliumavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/trillium.jpeg')
veilavatar = open('https://s3.amazonaws.com/on-tap-dev/breweries/veil.jpeg')

breweries = [alchemistavatar, bisselavatar, russianriveravatar, grimmavatar, hillfarmsteadavatar,
interbotoavatar, otherhalfavatar, tiredhandsavatar, treehouseavatar, trilliumavatar, veilavatar]
##checkins



##user images
user2 = open('https://s3.amazonaws.com/on-tap-dev/usr2.png')
user1 = open('https://s3.amazonaws.com/on-tap-dev/user9.png')
user3 = open('https://s3.amazonaws.com/on-tap-dev/user8.png')
user4 = open('https://s3.amazonaws.com/on-tap-dev/user7.png')
user5 = open('https://s3.amazonaws.com/on-tap-dev/user6.png')
user6 = open('https://s3.amazonaws.com/on-tap-dev/user5.png')
user7 = open('https://s3.amazonaws.com/on-tap-dev/user4.png')
user8 = open('https://s3.amazonaws.com/on-tap-dev/user3.png')
userarray = [user1, user2, user3, user4, user5, user6, user7, user8]

userarray.map! do |user|
  User.create!(username: Faker::Internet.user_name, password: "password", f_name: Faker::Name.first_name, l_name: Faker::Name.last_name, avatar: user)
end

meimage = open('https://s3.amazonaws.com/on-tap-dev/me.jpg')

#
# test_user = User.create!(username: "testaccount", password: "password", f_name: "Test", l_name: "Account")
# User.create(username: "mealpal", password: "password", f_name: "meal", l_name: "pal")



me = User.new(username: "jasobs10", password: "password", f_name: "Jason", l_name: "Liu", avatar: meimage)
me.save!

test_user = User.new(username: "testaccount", password: "password", f_name: "Test", l_name: "Account")
User.create(username: "mealpal", password: "password", f_name: "meal", l_name: "pal")


test_user.save!

brewery_style = ["Microbrewery", "Macrobrewery", "Farmhouse"]
brewerynames = [
  "The Alchemist",
  "Bissell Brothers",
  "Russian River Brewing",
  "Grimm",
  "Hill Farmstead",
  "Interboro",
  "Other Half",
  "Tired Hands",
  "Treehouse Brewing",
  "Trillium",
  "The Veil"
]

# 20.times do |x|
#   breweries << Brewery.create(name: Faker::Company.unique.name, style: brewery_style.sample, country: 'USA', city: Faker::Address.city, state: Faker::Address.state)
# end
breweries2 = breweries.map.with_index do |brewery, i|

  Brewery.create!(name: brewerynames[i], style: brewery_style.sample, country: "USA", city: Faker::Address.city, state: Faker::Address.state, image: brewery)


end

beer_descriptions = [
  "extraordinary aromas of banana and pear with mouth filling flavors of sweet malt and earthy hops. The lingering finish is dry and slightly bitter but very, very smooth.",
  "Mango, orange, and sweet grapefruit are predominant in the aroma with hints of pineapple and blended tropical fruit juice. The taste mirrors the aroma with a juicy mouthfeel and a proper bitterness. Fluffy.",
  "Imperial Stout brewed with Toasted Coconut and aged in Rye Whiskey Barrels.",
  "50% aged in Rum barrels, 50% aged in Apple Brandy barrels",
  "Pungent grapefruit notes greet your palate while an underlying current of soft tropical fruit dances in the background.",
  "Imperial Stout aged with Madagascar Vanilla Beans in Buffalo Trace, Four Roses, and Heaven Hill Bourbon barrels.",
  "hopped three times more than our standard IPA, and is dry hopped four different times.",
  "intense, but also surprising in its balance and softness. The mouthfeel is viscous and coating with flavors of overripe mango, dank citrus, and tropical fruit balanced by a sharp but pleasant finish",
  "For the best experience, please enjoy as fresh as possible. Citra, Falconer's Flight, Mosaic, Simcoe",
  "see what hop flavors you can pick out. Orange? Tropical Fruit? Pink Grapefruit? Pine? Spice?",
  "This American Double India Pale Ale is packed with juicy tropical fruit flavors and bright herbal aromas, thanks to the abundance of US-grown hops.",

]

oh = [allcitraavatar, brocolliavatar, shortdarkavatar, mylaravatar]
bud = [budavatar, budlightavatar]
russianriver = [consecrationavatar, damnnationavatar]
hillfarm = [doublecitravatar]
grimm = [doublenegativeavatar, tesseractavatar]
alc = [headytopperavatar, focalbangeravatar]
tree = [greenavatar, hazeavatar, juliusavatar]
biss = [substanceavatar]
inter = [madfatavatar]

beers = []

breweries2.each do |brewery|
  case brewery.name
  when "Other Half"
    beers << brewery.beers.create!(name: "All Citra Everything", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Double IPA", description: beer_descriptions.sample, image: oh[0])
    beers << brewery.beers.create!(name: "Brocolli", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: oh[1])
    beers << brewery.beers.create!(name: "Short Dark and Handsome", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Stout", description: beer_descriptions.sample, image: oh[2])
    beers << brewery.beers.create!(name: "Mylar Bags", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: oh[3])

  when "Russian River Brewing"
    beers << brewery.beers.create!(name: "Consecration", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Sour", description: beer_descriptions.sample, image: russianriver[0])
    beers << brewery.beers.create!(name: "Damnation", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Sour", description: beer_descriptions.sample, image: russianriver[1])

  when "Hill Farmstead"
    beers << brewery.beers.create!(name: "Double Citra", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Double IPA", description: beer_descriptions.sample, image: hillfarm[0])

  when "Grimm"
    beers << brewery.beers.create!(name: "Double Negative", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Stout", description: beer_descriptions.sample, image: grimm[0])
    beers << brewery.beers.create!(name: "Tesseract", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: grimm[1])

  when "The Alchemist"
    beers << brewery.beers.create!(name: "Heady Topper", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Double IPA", description: beer_descriptions.sample, image: alc[0])
    beers << brewery.beers.create!(name: "Focal Banger", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: alc[1])
  when "Treehouse Brewing"
    beers << brewery.beers.create!(name: "Green", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: tree[0])
    beers << brewery.beers.create!(name: "Haze", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: tree[1])
    beers << brewery.beers.create!(name: "Julius", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: tree[2])
  when "Bissell Brothers"
    beers << brewery.beers.create!(name: "The Substance", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "Pale Ale", description: beer_descriptions.sample, image: biss[0])
  when "Interboro"
    beers << brewery.beers.create!(name: "Mad Fat Fluid!", abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: "IPA", description: beer_descriptions.sample, image: inter[0])


  end


end





# breweries2.each do |x|
#   x.beers.create!(name: Faker::Beer.unique.name, abv: Faker::Beer.alcohol, ibu: Faker::Beer.ibu, style: Faker::Beer.style, description: "THIS IS SUCH AGOOdod vbaeeer and description")
# end

rate2 = [1,2,3,4,5]
container2 = ["can", "bottle", "draft"]

# userarray2 = []
# 10.times do |x|
#   userarray << User.create!(username: Faker::Name.last_name, password: "password", f_name: Faker::Name.first_name, l_name: Faker::Friends.character)
#
# end
brocolli1 = open('https://s3.amazonaws.com/on-tap-dev/beers/brocolli1.jpg')
damnnation1 = open('https://s3.amazonaws.com/on-tap-dev/beers/damnation.jpg')
doublenegative1 = open('https://s3.amazonaws.com/on-tap-dev/beers/doublenegative1.jpeg')
edward1 = open('https://s3.amazonaws.com/on-tap-dev/beers/edward1.jpeg')
everett1 = open('https://s3.amazonaws.com/on-tap-dev/beers/everett.jpg')
heady2 = open('https://s3.amazonaws.com/on-tap-dev/beers/heady2.jpg')
haze1 = open('https://s3.amazonaws.com/on-tap-dev/beers/haze1.jpeg')
madfat1 = open('https://s3.amazonaws.com/on-tap-dev/beers/madfat.jpg')
pliny1 = open('https://s3.amazonaws.com/on-tap-dev/beers/pliny1.jpeg')
supplication1 = open('https://s3.amazonaws.com/on-tap-dev/beers/supplication1.jpg')
psychokinesis1 = open('https://s3.amazonaws.com/on-tap-dev/beers/psychokinesis1.jpg')
tess1 = open('https://s3.amazonaws.com/on-tap-dev/beers/tesseract1.jpeg')
tess2 = open('https://s3.amazonaws.com/on-tap-dev/beers/tesseract2.jpg')
tess3 = open('https://s3.amazonaws.com/on-tap-dev/beers/tesseract4.jpg')


reviews = [
  "This is a good beer",
  "Good. Brown looking. Sweet.",
  "Smell is very pleasant blend of spice and malt, spice notes are cinnamon and vanilla dominant",
  "cloud orange pour ( N.E. IPA normal) with decent amount of fuzzy, white head smells of citrus and dank weed ",
  "drank straight from the can",
  "Awesome, awesome beer from a great brewer",
  "This beer is more than just a beer but an event HAHA. The color is amazing bright hazy yellow",
  "Love this beer, need to go get more!!",
  "Pours like motor oil.",
  "This is bad ass good. 6.7 mess you up smooth as hell great beer",
  "Invite tonight. Wish me luck",
  "this beer sucks",
  "Worst beer I've ever had",
  "this beer is great",
  "Refreshing approachable American Wild. Mildly tart with not a lot of complexity. This would be a great Summer thirst quencher",
  "Thanks dana !!!"

]

beers.each do |beer|
  beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample)
end

checkins = [brocolli1, damnnation1, doublenegative1, edward1, everett1, heady2, haze1, madfat1, pliny1, supplication1, psychokinesis1, tess1, tess2, tess3]
beers3 = beers.map do |beer|
  case beer.name
  when "Brocolli"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[0])

  when "Damnation"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[1])
  when "Double Negative"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[2])
  when "Edward"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[3])

  when "Everett"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[4])

  when "Heady Topper"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[5])

  when "Haze"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[6])
  when "Mad Fat Fluid!"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[7])

  when "Pliny the Elder"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[8])
  when "Supplication"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[9])
  when "Psychokinesis"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[10])

  when "Tesseract"
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[11])
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[12])
      beer.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample, image: checkins[13])
  end
end
userarray.each do |user|
  breweries2.each do |brewery|
    BreweryLike.create(user_id: user.id, brewery_id: brewery.id)
  end
end




# Beer.all.each do |x|
#   # debugger
#   x.checkins.create!(user_id: userarray.sample.id, rating: rate2.sample, address: Faker::Address.street_address, review: reviews.sample, container: container2.sample)
# end
