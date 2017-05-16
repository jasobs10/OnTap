const ADD_LIKE = "ADD_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";

const addLike = (brewery, user) => {
  return {
    type: ADD_LIKE,
    brewery,
    user
  };
};

const deleteLike = (id) => {
  return {
    type: REMOVE_LIKE,
    brewery
  };
};

const APIUTIL = {
  addLike: (brewery_id) => {
    return $.ajax({
      method: "POST",
      url: "api/brewery_likes",
      data: {brewery_like: {brewery_id}}
    });
  },

  removeBeerFromLike: (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/brewery_likes/${id}`
    });
  }
};

export const removeLike = (id) => {
  return dispatch => APIUTIL.removeBeerFromLike(id).then(() => dispatch(deleteLike()));
};

export const addBeerToLike = (beerId) => {
  return dispatch => APIUTIL.addBeerToLike(beerId).then(() => dispatch(addLike()));
};

const _defaultState = [];

export const wishlistReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let oldArray = oldState.slice(0);
  switch(action.type) {
    case ADD_LIKE:
      return oldArray.push(action.beer);
    case REMOVE_LIKE:
      let index = oldArray.indexOf(action.id);
      return oldArray.splice(index, 1);
    default:
      return oldState;
  }
};
