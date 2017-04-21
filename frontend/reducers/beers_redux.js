import { hashHistory } from 'react-router';


const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
const RECEIVE_BEER = "RECEIVE_BEER";

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

export const requestBeers = () => {
  return dispatch => APIUTIL.fetchBeers().then((beers) => dispatch(receiveAllBeers(beers)));
};

export const requestBeer = (id) => {
  return dispatch => APIUTIL.fetchBeer(id).then((beer) => dispatch(receiveBeer(beer)));
};

export const updateBeer = (beer) => {
  return dispatch => APIUTIL.createBeer(beer).then((beer) => dispatch(receiveBeer(beer)));
};

const _defaultBeersState = [];
export const beersReducer = (oldState = _defaultBeersState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers;
    case RECEIVE_BEER:
      let old = oldState.slice(0);
      return old.push(action.beer);
    default:
      return oldState;
  }

};
