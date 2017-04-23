import { hashHistory } from 'react-router';
import merge from 'lodash/merge';


const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
const RECEIVE_BEER = "RECEIVE_BEER";
const ADD_WISHLIST = "ADD_WISHLIST";
const REMOVE_WISHLIST = "REMOVE_WISHLIST";


const APIUTIL = {
  fetchBeers: () => {
    return $.ajax({
      method: "GET",
      url: "api/beers"
    });
  },

  fetchBeer: (id) => {
    return $.ajax({
      method: "GET",
      url: `api/beers/${id}`
    });
  },

  createBeer: (beer) => {
    return $.ajax({
      method: "POST",
      url: `api/breweries/${beer.brewery_id}/beers`,
      data: { beer }
    });
  },

  updateBeer: (beer) => {
    return $.ajax({
      method: "PATCH",
      url: `api/beers/${beer.id}`,
      data: { beer }
    });
  },

  addBeerToWishlist: (beer_id) => {
    // debugger
    return $.ajax({
      method: "POST",
      url: "api/wishlists",
      data: {wishlist: {beer_id}}
    });
  },

  removeBeerFromWishlist: (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/wishlists/${id}`
    });
  }

};

const receiveAllBeers = (beers) => {
  return {
    type: RECEIVE_ALL_BEERS,
    beers
  };
};

const receiveBeer = (beer) => {
  return {
    type: RECEIVE_BEER,
    beer
  };
};

const addWishlist = (wishlist) => {
  return {
    type: ADD_WISHLIST,
    wishlist
  };
};

const removeWishlist = (wishlist) => {
  return {
    type: REMOVE_WISHLIST,
    wishlist
  };
};

export const removeBeerFromWishlist = (id) => {
  // debugger
  return dispatch => APIUTIL.removeBeerFromWishlist(id).then((wishlist) => dispatch(removeWishlist(wishlist)));
};

export const addBeerToWishlist = (beerId) => {
  // debugger
  return dispatch => APIUTIL.addBeerToWishlist(beerId).then((wishlist) => dispatch(addWishlist(wishlist)));
};


export const requestBeers = () => {
  return dispatch => APIUTIL.fetchBeers().then((beers) => dispatch(receiveAllBeers(beers)));
};

export const requestBeer = (id) => {
  return dispatch => APIUTIL.fetchBeer(id).then((beer) => dispatch(receiveBeer(beer)));
};

export const updateBeer = (beer) => {
  return dispatch => APIUTIL.createBeer(beer).then((beer) => dispatch(receiveBeer(beer)));
};

const _defaultBeersState = {};
export const beersReducer = (oldState = _defaultBeersState, action) => {
  Object.freeze(oldState);
  let old = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers;
    case RECEIVE_BEER:
      // old = oldState.slice(0);
      // return old.push(action.beer);
      return merge(old, action.beer)
    case ADD_WISHLIST:
      // debugger
      // let newArray = old.map((el) => {
      //
      //     if (el.id === action.wishlist.beer_id) {
      //       // debugger
      //       el.currentUserWishlist = {'id': action.wishlist.id};
      //     }
      //     return el;
      //     // debugger
      // });
      // // debugger
      // return newArray;
      old[action.wishlist.beer_id].currentUserWishlist = {'id': action.wishlist.id};
      return old;

    case REMOVE_WISHLIST:
      // return old.map((el) => {
      //   // debugger
      //   if (el.id === action.wishlist.beer_id) {
      //     el.currentUserWishlist = null;
      //   }
      //   return el;
      //   // debugger
      // });

      old[action.wishlist.beer_id].currentUserWishlist = null;
      return old;
    default:
      return oldState;
  }

};
