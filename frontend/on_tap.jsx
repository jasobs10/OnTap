import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signUp, logIn, logOut} from './reducers/session_redux';

//TESTING
// import {signUp, logIn, logOut} from './actions/session_actions';
// import {receiveCurrentUser} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  // window.store = configureStore();
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

// <Root store={ store } />,
