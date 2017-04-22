const ADD_WISHLIST = "ADD_WISHLIST";
const REMOVE_WISHLIST = "REMOVE_WISHLIST";

const addWishlist = () => {
  return {
    type: ADD_WISHLIST,
    added: true
  };
};

const removeWishlist = () => {
  return {
    type: REMOVE_WISHLIST,
    added: false
  };
};

const APIUTIL = {
  addBeerToWishlist: (beerId) => {
    return $.ajax({
      method: "POST",
      url: "api/wishlists",
      data: {wishlist: {beerId}}
    });
  },

  removeBeerFromWishlist: (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/wishlists/${id}`
    });
  }
};

export const removeBeerFromWishlist = (id) => {
  return dispatch => APIUTIL.removeBeerFromWishlist(id).then(() => removeWishlist());
};

export const addBeerToWishlist = (beer_id) => {
  return dispatch => APIUTIL.addBeerToWishlist(beer_id).then(() => addWishlist());
};

const _defaultState = {added: false};

export const wishlistReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_WISHLIST:
      return action.added;
    case REMOVE_WISHLIST:
      return action.added;
    default:
      return oldState;
  }
};
