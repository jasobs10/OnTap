import { hashHistory } from 'react-router';
import merge from 'lodash/merge'


const RECEIVE_ALL_BREWERIES = "RECEIVE_ALL_BREWERIES";
const RECEIVE_BREWERY = "RECEIVE_BREWERY";
const ADD_BREWERY_LIKE = "ADD_BREWERY_LIKE";
const REMOVE_BREWERY_LIKE = "REMOVE_LIKE";

const APIUTIL = {

  addBreweryLike: (brewery_id) => {
    // debugger
    return $.ajax({
      method: "POST",
      url: "api/brewery_likes",
      data: {brewery_like: {brewery_id}}
    });
  },

  removeBreweryLike: (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/brewery_likes/${id}`
    });
  },

  fetchBreweries: (field = "id", param) => {
    return $.ajax({
      method: "GET",
      url: "api/breweries",
      data: {type: field, sort: param}
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

const addLike = (breweryLike) => {
  return {
    type: ADD_BREWERY_LIKE,
    breweryLike
  };
};

const removeLike = (breweryLike) => {
  return {
    type: REMOVE_BREWERY_LIKE,
    breweryLike
  };
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

export const addBreweryLike = (brewery_id) => {

  return dispatch => APIUTIL.addBreweryLike(brewery_id).then((brewerylike) => dispatch(addLike(brewerylike)));
};

export const removeBreweryLike = (id) => {
  return dispatch => APIUTIL.removeBreweryLike(id).then((brewerylike) => dispatch(removeLike(brewerylike)))
};

export const requestBreweries = (field, params) => {
  // debugger
  return dispatch => APIUTIL.fetchBreweries(field, params).then((breweries) => dispatch(receiveAllBreweries(breweries)));
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
  let old = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries;
    case RECEIVE_BREWERY:
      old = merge({}, oldState);
      return merge(old, action.brewery);
    case ADD_BREWERY_LIKE:
    // debugger
      old[action.breweryLike.brewery_id].currentUserLikes = { 'id': action.breweryLike.id }
      // debugger
      return old
    case REMOVE_BREWERY_LIKE:
      old[action.breweryLike.brewery_id].currentUserLikes = null
      return old;
    default:
      return oldState;
  }

};
