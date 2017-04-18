import { combineReducers } from 'redux';
import { currentUserReducer, errorsReducer } from './session_redux';

const rootReducer = combineReducers({
  errors: errorsReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
