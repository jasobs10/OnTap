import { hashHistory } from 'react-router';
import merge from 'lodash/merge';


const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
const RECEIVE_BEER = "RECEIVE_BEER";
const ADD_WISHLIST = "ADD_WISHLIST";
const REMOVE_WISHLIST = "REMOVE_WISHLIST";
const RECEIVE_BEERS_BY_STYLE = "RECEIVE_BEERS_BY_STYLE";
const RECEIVE_BEERS_BY_NAME = "RECEIVE_BEERS_BY_NAME";
const RECEIVE_BEERS_BY_RATING = "RECEIVE_BEERS_BY_RATING";
const ADD_ALL_STYLES = "ADD_ALL_STYLES"


const APIUTIL = {
  fetchBeers: (field = "id", param) => {
    return $.ajax({
      method: "GET",
      url: "api/beers",
      data: {type: field, sort: param}
    });
  },

  fetchBeer: (id) => {
    return $.ajax({
      method: "GET",
      url: `api/beers/${id}`
    });
  },

  // fetchBeersBy: (field) => {
  //   return $.ajax({
  //     method: "GET",
  //     url: "api/beers"
  //   });
  // },

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

const addAllStyles = (styles) => {
  return {
    type: ADD_ALL_STYLES,
    styles
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


export const requestBeers = (field, params) => {
  // debugger
  return dispatch => APIUTIL.fetchBeers(field, params).then((beers) => dispatch(receiveAllBeers(beers)));
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
      return merge(old, action.beer);
    case ADD_WISHLIST:

      old[action.wishlist.beer_id].currentUserWishlist = {'id': action.wishlist.id};
      return old;

    case REMOVE_WISHLIST:

      old[action.wishlist.beer_id].currentUserWishlist = null;
      return old;
    default:
      return oldState;
  }

};

export const stylesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_ALL_STYLES:
      return action.styles;
    default:
      return oldState;

  }
};
