```js
{
  currentUser: {
    id: 1,
    username: "jasobs10"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCheckin: {errors: []},
    editProfile: {errors: []},
    createBeer: {errors: []},
    createBrewery: {errors: []},
    createComment: {errors: []}
  },

  user: {
    id: 1,
    username: "jasobs10",
    location: "NYC",
    f_name: "Jason",
    l_name: "Liu",
    about: "Beer lover from New York",
    image_url: "image.com",

    wishlist: {
      beers: {
        1: {
          id: 1,
          name: "Julius",
          description: "This is a great delicious beer",
          // brewery_id: 5 ,
          abv: 13.0,
          associations!
          ibu: 10,
          style: 'IPA'
          image_url: 'image.com'
        }
      }
    },

    check_ins: {
      1: {
        user_id: 1,
        beer_id: 1,
        rating: 4.5,
        address: "address",
        review: "This is a good beer",
        image_url: "image.com",
        comments: {
          comment: "Good checking"
        }
        toasts: {
          1: {
            user_id: 5,
            checkin_id: 10
          }
        }
      }
    }
  }

  beers: {
    1: {
      id: 1,
      name: "Julius",
      description: "This is a great delicious beer",
      // brewery_id: 5 ,
      abv: 13.0,
      associations!
      ibu: 10,
      style: 'IPA'
      image_url: 'image.com'

      brewery: {
        1: {
          id: 1
          name: "Treehouse Brewing",
        }
      },
      checkins(id): [4,5,6,7]
    }
  },

  beer: {
    id: 1,
    name: "Julius",
    description: "This is a great delicious beer",
    // brewery_id: 5 ,
    abv: 13.0,
    associations!
    ibu: 10,
    style: 'IPA'
    image_url: 'image.com',

    brewery: {
      1: {
        id: 1
        name: "Treehouse Brewing",
      }
    },

    checkins(id): [4,5,6,7]
  }

  check_ins: {
    1: {
      id: 5,
      user_id: 1,
      beer_id: 1,
      rating: 4.5,
      address: "address",
      review: "This is a good beer",
      image_url: "image.com",
      comments: {
        id: 1,
        comment: "Good checking",
        user_id: 5,
        checkin_id: 10
      }
      toasts: {
        1: {
          user_id,
          checkin_id
        }
      }
      beer: {
        id: 1,
        name: "Julius",
        description: "This is a great delicious beer",
        // brewery_id: 5 ,
        abv: 13.0,
        associations!
        ibu: 10,
        style: 'IPA'
        image_url: 'image.com'

        brewery: {
          1: {
            id: 1
            name: "Treehouse Brewing",
          }
        }
      }
    }
  },

  check_in: {
    id: 5,
    user_id: 1,
    beer_id: 1,
    rating: 4.5,
    address: "address",
    review: "This is a good beer",
    image_url: "image.com",
    comments: {
      id: 1,
      comment: "Good checking",
      user_id: 5,
      checkin_id: 10
    }
    toasts: {
      1: {
        user_id,
        checkin_id
      }
    }    
  }

  breweries: {
    1: {
      id: 10
      name: "Other Half Brewing",
      type: "Micro Brewery",
      country: "USA",
      city: "New York",
      state: "New York",
      fb: "facebook.com",
      ig: "instagram.com",
      twitter: "twitter",
      website: "www.otherhalf.com",
      image_url: "image.com",
      checkins(ids): [10,2,5],
      likes: {
        1: {
          id: 4,
          user_id: 10,
          brewery_id: 10
        }
      }
    }
  },

  events: {
    1: {
      id: 5,
      date: "10/1/2018",
      time: "10:00 AM",
      name: "Birthday Bash",
      description: "Anniversary of Trillium"
    }
  }

  brewery: {
    id: 10
    name: "Other Half Brewing",
    type: "Micro Brewery",
    country: "USA",
    city: "New York",
    state: "New York",
    fb: "facebook.com",
    ig: "instagram.com",
    twitter: "twitter",
    website: "www.otherhalf.com",
    image_url: "image.com",
    likes: {
      1: {
        id: 4,
        user_id: 10,
        brewery_id: 10
      }
    }
  },


}
```
