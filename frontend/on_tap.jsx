import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { Root } from './components/root';


//TESTING
// import {signUp, logIn, logOut} from './actions/session_actions';
// import {receiveCurrentUser} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  ReactDOM.render(<h1>REACT!</h1>, document.getElementById('root'));
});

// <Root store={ store } />,
