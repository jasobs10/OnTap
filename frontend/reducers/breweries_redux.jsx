import { hashHistory } from 'react-router';
import merge from 'lodash/merge'


const RECEIVE_ALL_BREWERIES = "RECEIVE_ALL_BREWERIES";
const RECEIVE_BREWERY = "RECEIVE_BREWERY";

const APIUTIL = {
  fetchBreweries: () => {
    return $.ajax({
      method: "GET",
      url: "api/breweries"
    });
  },

  fetchBrewery: (id) => {
    return $.ajax({
      method: "GET",
      url: `api/breweries/${id}`
    });
  },

  createBrewery: (brewery) => {
    return $.ajax({
      method: "POST",
      url: 'api/breweries/',
      data: { brewery }
    });
  },

  updateBrewery: (brewery) => {
    return $.ajax({
      method: "PATCH",
      url: `api/breweries/${brewery.id}`,
      data: { brewery }
    });
  },

};

const receiveAllBreweries = (breweries) => {
  return {
    type: RECEIVE_ALL_BREWERIES,
    breweries
  };
};

const receiveBrewery = (brewery) => {
  return {
    type: RECEIVE_BREWERY,
    brewery
  };
};

export const requestBreweries = () => {
  return dispatch => APIUTIL.fetchBreweries().then((breweries) => dispatch(receiveAllBreweries(breweries)));
};

export const requestBrewery = (id) => {
  return dispatch => APIUTIL.fetchBrewery(id).then((brewery) => dispatch(receiveBrewery(brewery)));
};

export const updateBrewery = (brewery) => {
  return dispatch => APIUTIL.createBrewery(brewery).then((brewery) => dispatch(receiveBrewery(brewery)));
};

const _defaultBreweriesState = {};
export const breweriesReducer = (oldState = _defaultBreweriesState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries;
    case RECEIVE_BREWERY:
      let old = merge({}, oldState);
      return merge(old, action.brewery);
    default:
      return oldState;
  }

};
