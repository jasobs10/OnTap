import merge from 'lodash/merge';

const RECEIVE_BEER_CHECKINS = "RECEIVE_BEER_CHECKINS";

const APIUTIL = {
  fetchCheckins: (beer_id) => {
    return $.ajax({
      method: "GET",
      url: `/api/checkins`,
      data: { beer_id }
    });
  },
};

const receiveBeerCheckins = (checkins) => {
  return {
    type: RECEIVE_BEER_CHECKINS,
    checkins
  };
};

export const fetchBeerCheckins = (beer_id) => {
  return dispatch => APIUTIL.fetchCheckins(beer_id).then((checkins) => dispatch(receiveBeerCheckins(checkins)));
};

export const beerCheckinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let merged = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_BEER_CHECKINS:
      return action.checkins;
    default:
      return oldState;
  }
};
