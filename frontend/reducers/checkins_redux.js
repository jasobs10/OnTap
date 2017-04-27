import merge from 'lodash/merge';

const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
const RECEIVE_TOAST = "RECEIVE_TOAST";
const REMOVE_TOAST = "REMOVE_TOAST";
const RECEIVE_COMMENT = "RECEIVE_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const RECEIVE_BREWERY_CHECKINS = "RECEIVEBREWERYCHECKINS";

const RECEIVE_BEER_CHECKINS = "RECEIVE_BEER_CHECKINS";

// const APIUTIL = {
//   fetchCheckins: (beer_id) => {
//     return $.ajax({
//       method: "GET",
//       url: `api/checkins`,
//       data: { beer_id }
//     });
//   },
// };


const APIUTIL = {
  fetchCheckins: (beer_id) => {
    return $.ajax({
      method: "GET",
      url: `api/checkins`,
      data: { beer_id }
    });
  },

  fetchBreweryCheckins: (brewery_id) => {
    return $.ajax({
      method: "GET",
      url: `api/checkins`,
      data: {brewery_id}
    });
  },



  fetchUserCheckins: (user_id) => {
    // debugger
    return $.ajax({
      method: "GET",
      url: `api/checkins`,
      data: {user_id}
    });
  },

  fetchCheckin: (id) => {
    return $.ajax({
      method: "GET",
      url: `api/checkins/${id}`
    });
  },

  createCheckin: (checkin) => {
    return $.ajax({
      method: "POST",
      url: "api/checkins",
      data: { checkin }
    });
  },

  createPhotoCheckin: (formData) => {
    return $.ajax({
      method: "post",
      url: "/api/checkins",
      dataType: "json",
      contentType: false,
      processData: false,
      data: formData
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
  },

  addComment: (comment) => {
    return $.ajax({
      method: "POST",
      url: "api/comments",
      data: { comment }
    });
  },

  updateComment: (comment) => {
    //
    return $.ajax({
      method: "PATCH",
      url: `api/comments/${comment.id}`,
      data: { comment }
    });
  },

  removeComment: (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/comments/${id}`
    });
  }
};

const receiveAllCheckins = (checkins) => {
  return {
    type: RECEIVE_ALL_CHECKINS,
    checkins
  };
};

const editComment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment
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

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

const receiveBeerCheckins = (checkins) => {
  return {
    type: RECEIVE_BEER_CHECKINS,
    checkins
  };
};

const receiveBreweryCheckins = (checkins) => {
  return {
    type: RECEIVE_BREWERY_CHECKINS,
    checkins
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

export const addComment = (comment) => {
  return dispatch => APIUTIL.addComment(comment).then((comment_r) => dispatch(receiveComment(comment_r)));
};

export const deleteComment = (id) => {
  return dispatch => APIUTIL.removeComment(id).then((comment_r) => dispatch(removeComment(comment_r)));
};

export const updateComment = (comment) => {
  return dispatch => APIUTIL.updateComment(comment).then((comment_r) => dispatch(receiveComment(comment_r)));
};

export const createCheckin = (checkin) => {
  return dispatch => APIUTIL.createCheckin(checkin).then((checkin) => {
    //
    return dispatch(receiveCheckin(checkin));
  });
};

export const createPhotoCheckin = (checkin) => {
  return dispatch => APIUTIL.createPhotoCheckin(checkin).then((checkin) => {
    //
    return dispatch(receiveCheckin(checkin));
  });
};

export const fetchBreweryCheckins = (brewery_id) => {
  return dispatch => APIUTIL.fetchBreweryCheckins(brewery_id).then((checkins) => dispatch(receiveBreweryCheckins(checkins)));
};

export const fetchBeerCheckins = (beer_id) => {
  //
  return dispatch => APIUTIL.fetchCheckins(beer_id).then((checkins) => dispatch(receiveBeerCheckins(checkins)));
};

export const fetchUserCheckins = (user_id) => {
  return dispatch => APIUTIL.fetchUserCheckins(user_id).then((checkins) => dispatch(receiveAllCheckins(checkins)));
};


export const checkinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
    // debugger
      return action.checkins;
    case RECEIVE_CHECKIN:
    //
      return merge({}, oldState, {[action.checkin.id]: action.checkin});
    case RECEIVE_BEER_CHECKINS:
    //
      return action.checkins;
    case RECEIVE_BREWERY_CHECKINS:
      return action.checkins;
    case RECEIVE_TOAST:
    //
      let old = merge({}, oldState);

      old[action.user.checkin_id].currentUserToast = action.user;


      if (old[action.user.checkin_id].toastUsers) {
        merge(old[action.user.checkin_id].toastUsers, {[action.user.user_id]: action.user });
      } else {
        old[action.user.checkin_id].toastUsers = {[action.user.user_id]: action.user};
      }
      //
      return old;


    case REMOVE_TOAST:
    //
      let old2 = merge({}, oldState);
      old2[action.toast.checkin_id].currentUserToast = null;
      delete old2[action.toast.checkin_id].toastUsers[action.toast.user_id];
      return old2;

    case RECEIVE_COMMENT:
      let merged = merge({}, oldState);
      //
      if (merged[action.comment.checkin_id].comments) {
        merge(merged[action.comment.checkin_id].comments, {[action.comment.id]: action.comment});
      } else {
        merged[action.comment.checkin_id].comments = {[action.comment.id]: action.comment};
      }
      //
      return merged;

    case REMOVE_COMMENT:
    //
      let merged2 = merge({}, oldState);
      delete merged2[action.comment.checkin_id].comments[action.comment.id];
      return merged2;

    default:
      return oldState;
  }
};
