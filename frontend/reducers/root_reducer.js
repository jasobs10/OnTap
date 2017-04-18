import { combineReducers } from 'redux';
import { currentUserReducer, errorsReducer } from './session_redux';
import { modalReducer } from './modal_redux';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer,
  modal: modalReducer
});

export default rootReducer;
