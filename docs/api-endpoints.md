# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app


## JSON API

### Users

- `POST /api/users`

  - `signs in user`


- `GET /api/users/:id`

  - `retrieves user show`


- `PATCH /api/users/:id`

  - `edit user`


- `DELETE /api/users/id`

  - `deletes user`


### Session

- `POST /session`

  - `signs user in`


- `DELETE /session`

  - `signs user out`

### Checkins

- `GET /api/checkins`

  - `retrieves all checkins`


- `GET /api/beer/:id/checkins`

  - `retrieves beer specific checkins`


- `GET /api/user/:id/checkins`

  - `retrieves user specific checkins`


- `GET /api/brewery/:id/checkins`

  - `retrieves brewery specific checkins`


- `POST /api/beer/:id/checkins`

  - `creates checkin for current user`


- `DELETE /api/checkins/:id`

  - `deletes checkin`

### Checkin Comments (Post)

- `POST /api/checkin/:id/comments`

  - `creates checkin comment (requires beer id to create)`


- `PATCH /api/comments/:id`

  - `edits comment (checks for current user)`


- `DELETE /api/comments/:id`

  - `deletes comment (checks for current user)`

### Checkin Toasts (Likes for checkins)

- `POST /api/checkin/checkin_toasts/`

  - `toasts(likes) checkin`


- `DELETE /api/checkin_toasts/:id`

  - `deletes checkin (checks for current user)`

### Beers

- `GET /api/beers`

  - `retrieves beers`


- `GET /api/beers/:id`

  - `retrieves beer show`


- `GET /api/brewery/:id/beers`  

  - `retrieves beers from brewery by id`


- `POST /api/beers`

  - `creates beer`


- `PATCH /api/beers/:id`

  - `edits beer`


### Breweries

- `GET /api/breweries`

  - `retrieves breweries`


- `GET /api/breweries/:id`

  - `retrieves brewery show`


- `POST /api/breweries`

  - `creates brewery`


- `PATCH /api/breweries/:id`

  - `edits breweries`


### Brewery Likes

- `POST /api/brewery/:id/brewery_likes`

  - `likes brewery`



- `DELETE /api/brewery_likes/:id`

  - `deletes brewery`      




### Wishlist

- `GET /api/users/:id/wishlist`

  - `retrieves current user's wishlist beers`


- `POST /api/users/:id/wishlist`

  - `adds beer to user's wishlist`


- `DELETE /api/wishlist/:id`

  - `removes beer by beer id from user's wishlist`


# Bonus

### Friends

- `GET /api/users/:user_id/friends`

  - `retrieves user's friends`


- `POST /api/friends`

  - `adds friend`


- `DELETE /api/friends/:id`

  - `deletes friend`

### Badges

- `POST /api/badges_users`

  - `adds badge to user`


### Events


- `GET /api/events`

  - `retrieves events`


- `GET /api/events/:id`

  - `retrieves event show`


- `POST /api/events`

  - `creates event`


- `DELETE /api/events/:id`

  - `deletes event`


### VenueLikes

- `POST /api/venue_likes`

- `likes venue`



  - `DELETE /api/venue_likes/:id`

  - `deletes venue`


### Venues

- `GET /api/venues`

  - `retrieves venues`


- `GET /api/venues/:id`

  - `retrieves venue show`


- `POST /api/venues`

  - `creates venue`


- `DELETE /api/venues/:id`

  - `deletes venue`
