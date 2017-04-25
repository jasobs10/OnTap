import merge from 'lodash/merge';

const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
const RECEIVE_TOAST = "RECEIVE_TOAST";
const REMOVE_TOAST = "REMOVE_TOAST";




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

  addToast: (checkin_id) => {
    return $.ajax({
      method: "POST",
      url: "api/toasts",
      data: {toast: {checkin_id}}
    });
  },

  removeToast: (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/toasts/${id}`
    });
  }
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

const addToast = (user) => {

  return {
    type: RECEIVE_TOAST,
    user
  };
};

const removeToast = (toast) => {
  return {
    type: REMOVE_TOAST,
    toast
  };
};

export const createToast = (checkin_id) => {
  return dispatch => APIUTIL.addToast(checkin_id).then((user) => dispatch(addToast(user)));
};

export const deleteToast = (id) => {
  return dispatch => APIUTIL.removeToast(id).then((toast) => dispatch(removeToast(toast)));
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
    case RECEIVE_TOAST:
    // debugger
      let old = merge({}, oldState);
      // if (old[action.user.checkinId].toastUsers) {
      //   merge(old[action.user.checkinId].toastUsers, {[action.user.userId]: action.user });
      // } else {
      //   old[action.user.checkinId].toastUsers = {[action.user.userId]: action.user}
      // }
      // debugger
      old[action.user.checkin_id].currentUserToast = action.user;


      if (old[action.user.checkin_id].toastUsers) {
        merge(old[action.user.checkin_id].toastUsers, {[action.user.user_id]: action.user });
      } else {
        old[action.user.checkin_id].toastUsers = {[action.user.user_id]: action.user};
      }
      // debugger
      return old;

    case REMOVE_TOAST:
    // debugger
      let old2 = merge({}, oldState);
      old2[action.toast.checkin_id].currentUserToast = null;
      delete old2[action.toast.checkin_id].toastUsers[action.toast.user_id];
      return old2;
    default:
      return oldState;
  }
};
