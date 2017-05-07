# OnTap

OnTap is a web app inspired by UNTAPPD where beer lovers can share, rate and review beers and interact with other users. On the backend, it uses Ruby on Rails with a PostgreSQL database. The front-end is handled by React.js and Redux.

[OnTap live](https://on-tapp.herokuapp.com)

## Technologies used

* Ruby
* Rails
* Javascript
* React
* Redux
* PostgreSQL
* Amazon Web Services
* Gems/supplemental
  * paperclip
  * BCrypt
  * figaro
  * jbuilder

## Features

* Session and user authentication on backend
* Checkin beers
  * Photo upload, review and rating
* Form modals
* Toasts (likes) and comments on user checkins
* Display and filter beer and brewery list by different app statistics
* Add beers to wishlist and like breweries
* See all checkins associated with a particular beer, brewery and user


## Session Authentication

Authentication for OnTap is handled on the backend and front-end. Actions limited to users the are logged in are handled by the controllers, where actions are restricted to logged in users. On the front-end, OnTap is a single page app where all content is delivered on one static page. On DOM load, the app checks for the current user set by Rails. All routes beyond the splash page are restricted to logged in users. If a user is not logged in, the user will be redirected to the splash page. The splash page contains the log in, sign up, and demo forms which are rendered as a modal by the modal component.

```ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```

## Beer Checkins

Checkins are posts that are created by a user for a certain beer, where the user can upload a photo, leave a rating and review, and post where they are drinking the beer. Checkins are posted to the global feed located on the home page. In addition, individual beer, brewery and user pages display checkins associated to the respective beer, brewery or user.

Checkins are stored in the checkins table, with columns `id`, `beer_id`, `user_id`, `rating`, `review`, `address`, `container` and `image`. The `BeerIndexItem` component links to a checkin form which makes an API call to the `CheckinsController` to create a new checkin based on the values that are submitted through the form. The `CheckinsController` also handles which checkins to return based on the API call for all, user, beer or brewery. Image uploads are stored by AWS, and are saved to the database by paperclip.

On the front-end the `CheckinsIndex` component renders all of the individual `CheckinIndexItems`.

![checkin]

## Form Modals

Forms on OnTap are rendered by the `Modal` component. This component will render the form when a form component is passed to it as a prop, and when `activateModal` is set to true.

```javascript
render() {
  if (this.state.active) {
    return (
      <div>
        <div className="modal-background" onClick={() => this.props.activateModal(false)}>
        </div>
        <div className="modal">
          {this.state.component}
        </div>
      </div>
    );
  }

  return (
    <p className="hidden"></p>
  )
}
```

## Checkin Toasts and Comments

Each checkin has the ability to be commented on and toasted by a user that is logged in. Comments are stored in a join table `comments`, which holds the `id`, `checkin_id`, `user_id` and `comment`.
Each `CheckinIndexItem` contains a button that will display the `CommentForm` as a modal. An API call to the `CommentsController` will create a new comment for the specific checkin the form was filled out for. The `CommentsIndex` component is rendered inside the `CheckinIndexItem` it is associated with, and each comment is rendered by `CommentIndexItem`. Comments can be edited and deleted, only if the user is the one who created the comment, or the one who created the checkin.

Each `CheckinIndexItem` has a toast button, where users can toast or untoast a checkin. The current number of toasts is displayed by the checkin. The `toasts` join table holds the `id`, `user_id` and `checkin_id`.

## Display Top Rated Beers/Breweries

Beers and Breweries each have an index page, where each `BeerIndexItem` and `BreweryIndexItem` are displayed, initially sorted by rating in descending order (5 - 0). Both index pages have filter drop downs.  Beers can be filtered by rating, name and style. Breweries can be filtered by state, name and rating.

### Beers

The `beers` table holds the `id`, `name`, `description`, `brewery_id`, `abv`, `ibu` and `style`. Under the /beers route, an initial API call to the `BeersController` will return a list of the beers sorted by their checkins rating average. The `BeersIndex` component renders a list of `BeerIndexItems`, which displays its name, brewery, description, ibu, abv, average checkin rating, number of checkins and date added. Drop down selectors at the top of the page will send requests to the backend to return a list of the beers filtered by a specific criteria.

![filter]

### Breweries

The `breweries` table holds the `id`, `name`, `style`, `country` and `state`. `Breweries` is very similar to beers, in that when a user goes to the /breweries route, an API call is made to the `BreweriesController` and returns a list of breweries sorted by rating. The `BreweriesIndex` component renders each `BreweryIndexItem` which displays number of ratings, average rating, brewery name, brewery state, and date added. Breweries can also be filtered by name, rating, or state.  The dropdown boxes will send an API call to the `BreweriesController` to retrieve the specific list.

## Beer Wishlist/Brewery Likes

The `BeerWishlistIndex` and `BreweryLikesIndex` components are displayed on every page once the current user is logged in.  The `BeerWishlistIndex` contains a list of beers that the current user has added to his/her wishlist. The `BreweryLikesIndex` contains a list of breweries that the current user has liked. On each `BeerIndexItem`, there is a button that will send an API call to the `WishlistsController` which creates a new entry for that beer and current user. Once added, the beer is added to the `BeerWishlistIndex`. Once added, the button toggles to be a button that can remove the beer from that wishlist.

Each `BreweryIndexItem` has a button to like that brewery.  When clicked, an API call is made to the BreweryLikesController which will save that user and brewery. Once added, the brewery is added to the `BreweryLikesIndex`. The button now toggles into a button where the user can remove the brewery from the `BreweryLikesIndex`.

![likes]

## Future Directions for Project

This is a project that I plan on working on. The features that will come next are below.

### Friends

Friends is a main feature of UNTAPPD. Users will be able to add and remove friends, and see a friends only feed. User interaction will be more restricted to friends.

### Venues

Right now, my checkins table includes an address column. Ideally, this would be stored as a venue where the user is checking in from.  Venues will be listed and searchable on Google Maps.

### Search and Infinite Scroll

These two will add some usability to the site. Right now, I have a show more button at the bottom of each index page. Infinite scroll will automatically fetch more results once the user reaches the bottom of the page.

Search will allow users to find beers more easily.

[checkin]: ./docs/screens/checkin-demo.gif
[filter]: ./docs/screens/filter-demo2.gif
[likes]: ./docs/screens/likes.gif
