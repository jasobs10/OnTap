import merge from 'lodash/merge';
const RECEIVE_USER = "RECEIVE_USER";


const APIUTIL = {
  fetchUser: (id) => {
    // debugger
    return $.ajax({
      method: "GET",
      url: `api/users/${id}`,
    });
  },

  editUser: (user) => {
    return $.ajax({
      method: "PATCH",
      url: `api/users/${user.id}`,
      data: { user }
    });
  }
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};


export const fetchUser = (id) => {
  return dispatch => APIUTIL.fetchUser(id).then((user) => dispatch(receiveUser(user)));
};

export const updateUser = (user) => {
  return dispatch => APIUTIL.editUser(user).then((user) => dispatch(receiveUser(user)));
};


export const userReducer = (oldState = {about: "", city: "", country: "", state: ""}, action) => {
  const _default = {about: "", city: "", country: "", state: ""};
  switch (action.type) {
    case RECEIVE_USER:
    // debugger
      return merge(_default, action.user);
    default:
      return oldState;
  }
};
