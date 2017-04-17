# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location        | string    |
f_name          | string    | not null
l_name          | string    | not null
private         | boolean   | not null, default false
about           | text      |
image_url       | string    |
<!-- ## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
friend_id   | integer   | not null, foreign key (references users), indexed, unique [user_id] -->

## beers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
description | text      | not null
brewery_id  | integer   | not null, foreign key (references breweries)
abv         | float     | not null
ibu         | float     | not null
style       | string    | not null
image_url   | string    |

## checkins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
beer_id     | integer   | not null, foreign key (references beers), indexed
venue_id    | integer   | foreign key (references venues), indexed
rating      | integer   | not null
address     | string    |
lat         | float     |
lon         | float     |
review      | text      |
image_url   | string    |

## checkin_toasts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
checkin_id  | integer   | not null, foreign key (references checkins), indexed, unique [user_id]

## checkin_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
checkin_id  | integer   | not null, foreign key (references checkins), indexed
comment     | text      | not null

## breweries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
type        | string    | not null
country     | string    | not null
city        | string    | not null
state       | string    | not null
fb          | string    |
ig          | string    |
twitter     | string    |
website     | string    |
image_url   | string    |

## brewery_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
brewery_id  | integer   | not null, foreign key (references breweries)
user_id     | integer   | not null, foreign key (references users)


## wishlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
beer_id     | integer   | not null, foreign key (references beers)

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
venue_id    | integer   | not null, foreign key (references venues), indexed
date        | string    | not null
time        | string    | not null
name        | string    | not null
description | text      | string  

# Bonus

## venues
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
name        | string    | not null, unique
description | text      | not null
address     | string    | not null, unique
lat         | float     | not null
lon         | float     | not null
image_url   | string    |

## venue_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
venue_id    | integer   | not null, foreign key (references venues), indexed, unique [user_id]
## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
friend_id   | integer   | not null, foreign key (references users), indexed, unique [user_id]

## badges
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
badge       | string    | not null
image_url   | string    | not null

## badges_users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
badge_id    | integer   | not null, foreign key (references badges), indexed
