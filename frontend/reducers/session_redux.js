import merge from 'lodash/merge';
// Session Action Creators (Log in, Sign up, Log Out)

const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
const RECEIVE_SIGNIN_ERRORS = "RECEIVE_SIGNIN_ERRORS";
const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const RECEIVE_LOGOUT_ERRORS = "RECEIVE_LOGOUT_ERRORS";

const receiveLogOutErrors = (errors) => {
  return {
    type: RECEIVE_LOGOUT_ERRORS,
    logOut: errors
  };
};

const receiveSignUpErrors = (errors) => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    signUp: errors
  };
};

const receiveSignInErrors = (errors) => {
  return {
    type: RECEIVE_SIGNIN_ERRORS,
    signIn: errors
  };
};

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    // id: currentUser.id,
    // username: currentUser.username,
    // f_name: currentUser.f_name
    currentUser
  };
};

// SESSION Thunk Action Creators

export const signUp = (user) => {
  // debugger
  return dispatch => APIUTIL.signUp(user).then(r => dispatch(receiveCurrentUser(r)), errors => dispatch(receiveSignUpErrors(errors.responseJSON)));
};

export const logIn = (user) => {
  return dispatch => APIUTIL.logIn(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)), errors => dispatch(receiveSignInErrors(errors.responseJSON)));
};

export const logOut = (user) => {
  return dispatch => APIUTIL.logOut().then(currentUser => dispatch(receiveCurrentUser(null)), errors => dispatch(receiveLogOutErrors(errors.responseJSON)));
};



// AJAX API UTIL For Session
const APIUTIL = {
  signUp: (user) => {
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

//Errors Reducer
const _defaultErrorsState = {};
export const errorsReducer = (oldState = _defaultErrorsState, action) => {
  // debugger
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SIGNUP_ERRORS:
    // debugger
      return Object.assign({}, oldState, {'signUp': action.signUp});

    case RECEIVE_SIGNIN_ERRORS:
      return Object.assign({}, oldState, {'signIn': action.signIn});
    case RECEIVE_LOGOUT_ERRORS:
      return Object.assign({}, oldState, {'logOut': action.logOut});
    default:
      return oldState;
  }
};

// currentUserReducer
const _defaultCurrentUserState = null;
export const currentUserReducer = (oldState = _defaultCurrentUserState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    // debugger
      return action.currentUser;
    default:
      return oldState;
  }
};
