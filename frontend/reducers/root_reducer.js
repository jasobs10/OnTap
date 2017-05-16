import { combineReducers } from 'redux';
import { currentUserReducer, errorsReducer } from './session_redux';
import { modalReducer } from './modal_redux';
import { beersReducer } from './beers_redux';
import { breweriesReducer, breweryNamesReducer } from './breweries_redux';
import { wishlistReducer } from './wishlist_redux';
import { checkinsReducer } from './checkins_redux';
import { beerCheckinsReducer } from './beer_redux';
import { userReducer } from './user_redux';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer,
  modal: modalReducer,
  beers: beersReducer,
  breweries: breweriesReducer,
  checkins: checkinsReducer,
  user: userReducer,
  breweryNames: breweryNamesReducer

});

export default rootReducer;
