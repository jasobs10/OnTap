import merge from 'lodash/merge';

const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";


const APIUTIL = {
  fetchCheckins: () => {
    return $.ajax({
      method: "GET",
      url: "api/checkins"
    });
  },

  fetchCheckin: (id) => {
    return $.ajax({
      method: "GET",
      url: `api/checkins/${id}`
    });
  },
};

const receiveAllCheckins = (checkins) => {
  return {
    type: RECEIVE_ALL_CHECKINS,
    checkins
  };
};

const receiveCheckin = (checkin) => {
  return {
    type: RECEIVE_CHECKIN,
    checkin
  };
};

export const requestAllCheckins = () => {
  return dispatch => APIUTIL.fetchCheckins().then((checkins) => dispatch(receiveAllCheckins(checkins)));
};

export const requestCheckin = (id) => {
  return dispatch => APIUTIL.fetchCheckin(id).then((checkin) => dispatch(receiveCheckin(checkin)));
};

export const checkinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins;
    case RECEIVE_CHECKIN:
      return merge({}, oldState, action.checkin);
    default:
      return oldState;
  }
};
