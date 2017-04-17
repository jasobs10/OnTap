## OnTap

[Heroku link][heroku] **Note:** This should be a link to your production site

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/hXZGGErD/ontap


### Minimum Viable Product

OnTap is a web application inspired by UnTappd built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Production README
- [ ] User Profile
  - [ ] User check in feed
  - [ ] Wishlists
  - [ ] Edit Account
- [ ] Beer/Brewery show pages
  - [ ] Continuous specific beer/brewery check in feed
  - [ ] Create Check in
  - [ ] Edit beer
  - [ ] Brewery Likes
- [ ] Check-ins
  - [ ] Continuous global check in feed
  - [ ] Comments and likes
- [ ] Beers/Breweries tab
  - [ ] Render beer/brewery list based on click
  - [ ] Continuous scrolling beer/brewery feed
  - [ ] Create beer/brewery
  - [ ] Beer search

## Bonus

- [ ] Venues
- [ ] Venue Beers
- [ ] Events
- [ ] Friends
- [ ] Friends only feed
- [ ] Badges
- [ ] Search
- [ ] Direct messages/chat
- [ ] Location for events/venues


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend model/controller setup and front end user authentication (2 days, W1D2, W1D3)

**Objective:** Functional project with authentication and associations

- [ ] create new project
- [ ] create models: `User`
- [ ] create controllers: `Users`, `Session`
- [ ] authentication
- [ ] user sign in/sign up pages
- [ ] guest sign in
- [ ] splash page
- [ ] landing page after sign in with basic navbar
- [ ] create working account dropdown component in navbar

### Phase 2: Beer and Brewery Model, API and components (1 day, W1D4)

**Objective:** Beers and Breweries Exist. Display show pages inside BeersBreweriesTab Component

- [ ] create models: `Beer, Brewery`
- [ ] create controllers: `Beers, Breweries, Likes`
- [ ] create controllers: `Beers`
- [ ] setup redux/api cycle for beers
- [ ] setup redux/api cycle for breweries
- [ ] make sure brewery form works
- [ ] make sure beer form works

### Phase 3: Checkin Model, API and components (1 day, W1D5)

**Objective:** Checkins Exist and display beer/brewery info

- [ ] create model: `Checkin, Toast`
- [ ] create controllers: `Checkins, Toasts`
- [ ] setup redux/api cycle for Checkins
- [ ] make sure checkin form works


### Phase 4: Comments, toasts, wishlist, events, and profile (2 days, W2D1, W2D2)

**Objective:** Users have profile pages and can comment on or like checkins.

- [ ] create controllers: `Comments`
- [ ] create model: `Wishlist`
- [ ] create model: `Event`
- [ ] setup redux cycles for comments and toasts in the checkin component
- [ ] make profile show page
- [ ] profile page shows wishlist
- [ ] Show Events in main page
- [ ] add checkin-feed to beer page
- [ ] add checkin-feed to profile page
- [ ] feeds are selective based on page you're on
- [ ] make sure comments form works
- [ ] style feed
- [ ] style profile page
- [ ] style drink page

### Phase 5: Checkin styling and Modals (1 day, W2D3)

**Objective:** Users can have friends and follow only their feeds on their main page

- [ ] style checkin form
- [ ] Add infinite scroll to all checkin feeds
- [ ] Render forms in the Modal Component
- [ ] Add average rating to CheckinItems with 5 stars
- [ ] Order beer and brewery pages by rating

### Phase 6: Misc CSS Styling / Bonus Search, Add Seeds (2 days, W2D4, W2D5)

**Objective:** Fix up any styling issues and work on search bar and bonuses.

- [ ] Add seed data
- [ ] style pages
- [ ] Add search bar to find beers
- [ ] Add sort filters in beers and breweries show pages
- [ ] Display Top Beers on user profile page

### Bonus

- [ ] Venues
- [ ] Venue Beers
- [ ] Events
- [ ] Friends
- [ ] Friends only feed
- [ ] Badges
- [ ] Search
- [ ] Direct messages/chat
- [ ] Location for events/venues
