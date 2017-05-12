import merge from 'lodash/merge';
import { activateModal } from './modal_redux';
import { receiveUser } from './user_redux';
// Session Action Creators (Log in, Sign up, Log Out)

const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
const RECEIVE_SIGNIN_ERRORS = "RECEIVE_SIGNIN_ERRORS";
const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const RECEIVE_LOGOUT_ERRORS = "RECEIVE_LOGOUT_ERRORS";
const ADD_CURRENT_USER_WISHLIST = "ADD_CURRENT_USER_WISHLIST";
const REMOVE_CURRENT_USER_WISHLIST = "REMOVE_CURRENT_USER_WISHLIST";
const ADD_USER_LIKE = "ADD_USER_LIKE";
const REMOVE_USER_LIKE = "REMOVE_USER_LIKE";

export const receiveLogOutErrors = (errors) => {
  return {
    type: RECEIVE_LOGOUT_ERRORS,
    logOut: errors
  };
};

export const receiveSignUpErrors = (errors) => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    signUp: errors
  };
};

export const receiveSignInErrors = (errors) => {
  return {
    type: RECEIVE_SIGNIN_ERRORS,
    signIn: errors
  };
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const addCurrentUserWishlist = (beer) => {
  return {
    type: ADD_CURRENT_USER_WISHLIST,
    beer
  };
};

export const removeCurrentUserWishlist = (id) => {
  return {
    type: REMOVE_CURRENT_USER_WISHLIST,
    id
  };
};

export const addUserLike = (brewery) => {
  return {
    type: ADD_USER_LIKE,
    brewery
  };
};

export const removeUserLike = (id) => {
  return {
    type: REMOVE_USER_LIKE,
    id
  };
};

export const signUp = (user) => {
  return dispatch => APIUTIL.signUp(user).then(r => dispatch(receiveCurrentUser(r)), errors => dispatch(receiveSignUpErrors(errors.responseJSON)));
};

export const defaultSignUp = (user) => {
  return dispatch => APIUTIL.defaultSignUp(user).then(r => dispatch(receiveCurrentUser(r)), errors => dispatch(receiveSignUpErrors(errors.responseJSON)));
};

export const editUser = (user, id) => {
  return dispatch => APIUTIL.editUser(user, id).then(r => {
    dispatch(receiveCurrentUser(r));
    dispatch(receiveUser(r));
  });
};

export const defaultEditUser = (user) => {
  return dispatch => APIUTIL.defaultEditUser(user).then(r => {
    dispatch(receiveCurrentUser(r));
    dispatch(receiveUser(r));
  });
};

export const logIn = (user) => {
  return dispatch => APIUTIL.logIn(user).then((r) => {
    dispatch(receiveCurrentUser(r));},
    (errors) => {
      dispatch(receiveSignInErrors(errors.responseJSON));
  });
};

export const logOut = (user) => {
  return dispatch => APIUTIL.logOut().then(currentUser => dispatch(receiveCurrentUser(null)), errors => dispatch(receiveLogOutErrors(errors.responseJSON)));
};



const APIUTIL = {
  signUp: (formData) => {

    return $.ajax({
      method: "post",
      url: "/api/users",
      dataType: "json",
      contentType: false,
      processData: false,
      data: formData
    });
  },

  editUser: (user, id) => {
    return $.ajax({
      method: "patch",
      url: `/api/users/${id}`,
      dataType: "json",
      contentType: false,
      processData: false,
      data: user
    });
  },

  defaultEditUser: (user) => {
    return $.ajax({
      method: "patch",
      url: `/api/users/${user.id}`,
      data: { user }
    });
  },


  defaultSignUp: (user) => {
    return $.ajax({
      method: "post",
      url: "/api/users",
      data: user
    });
  },

  logIn: (user) => {
    return $.ajax({
      method: "post",
      url: "/api/session",
      data: user
    });
  },

  logOut: () => {
    return $.ajax({
      method: "DELETE",
      url: "/api/session",
    });
  }
};

const _defaultErrorsState = {};
export const errorsReducer = (oldState = _defaultErrorsState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return Object.assign({}, oldState, {'signUp': action.signUp});

    case RECEIVE_SIGNIN_ERRORS:
      return Object.assign({}, oldState, {'signIn': action.signIn});
    case RECEIVE_LOGOUT_ERRORS:
      return Object.assign({}, oldState, {'logOut': action.logOut});
    default:
      return oldState;
  }
};

const _defaultCurrentUserState = null;
export const currentUserReducer = (oldState = _defaultCurrentUserState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case ADD_CURRENT_USER_WISHLIST:
      let current = merge({}, oldState);
      let newBeer = {wishlistBeers: {[action.beer.id]: action.beer}};
      return merge(current, newBeer);
    case REMOVE_CURRENT_USER_WISHLIST:
      let current2 = merge({}, oldState);
      delete current2.wishlistBeers[action.id];
      return current2;
    case ADD_USER_LIKE:
      let current4 = merge({}, oldState);
      let newLike = {likedBreweries: {[action.brewery.id]: action.brewery}};
      return merge(current4, newLike);
    case REMOVE_USER_LIKE:
      let current3 = merge({}, oldState);
      delete current3.likedBreweries[action.id];
      return current3;

    default:
      return oldState;
  }
};
