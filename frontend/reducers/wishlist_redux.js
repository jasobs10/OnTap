const ADD_WISHLIST = "ADD_WISHLIST";
const REMOVE_WISHLIST = "REMOVE_WISHLIST";

const addWishlist = (beer) => {
  return {
    type: ADD_WISHLIST,
    beer
  };
};

const removeWishlist = (id) => {
  return {
    type: REMOVE_WISHLIST,
    id
  };
};

const APIUTIL = {
  addBeerToWishlist: (beer_id) => {
    return $.ajax({
      method: "POST",
      url: "api/wishlists",
      data: {wishlist: {beer_id}}
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
  return dispatch => APIUTIL.removeBeerFromWishlist(id).then(() => dispatch(removeWishlist()));
};

export const addBeerToWishlist = (beerId) => {
  return dispatch => APIUTIL.addBeerToWishlist(beerId).then(() => dispatch(addWishlist()));
};

const _defaultState = [];

export const wishlistReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let oldArray = oldState.slice(0);
  switch(action.type) {
    case ADD_WISHLIST:
      return oldArray.push(action.beer);
    case REMOVE_WISHLIST:
      let index = oldArray.indexOf(action.id);
      return oldArray.splice(index, 1);
    default:
      return oldState;
  }
};
