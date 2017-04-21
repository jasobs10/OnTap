import { combineReducers } from 'redux';
import { currentUserReducer, errorsReducer } from './session_redux';
import { modalReducer } from './modal_redux';
import { beersReducer } from './beers_redux';
import { breweriesReducer } from './breweries_redux';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer,
  modal: modalReducer,
  beers: beersReducer,
  breweries: breweriesReducer
});

export default rootReducer;
