import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Splash from './components/splash/splash';
import CheckinIndex from './components/checkin/checkin_index';
import Navbar from './components/shared/navbar';
import Beers from './components/beers/beers';
import BreweriesIndex from './components/breweries/breweries_index';
// import {signUp, logIn, logOut} from './reducers/session_redux';

//TESTING
// import {signUp, logIn, logOut} from './actions/session_actions';
// import {receiveCurrentUser} from './actions/session_actions';

// let nav = (<div></div>);
//

// <div className="app-container">
//     {nav}
//     {this.props.children}
//   </div>
//


const App = (props) => {
  // debugger
  let nav = (<div></div>);
  if(props.location.pathname !== "/"){
    nav = <Navbar />
  }

  return (
    <div className="main-wrapper">
      { nav }
      { props.children }
      <footer className="splash-footer">
        © ONTAP, 2017
      </footer>
    </div>
  );
};

const Root = ({ store }) => {

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;
    if (currentUser) {
      replace('/home')
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Splash } onEnter={_redirectIfLoggedIn}/>
          <Route path="home" component={ CheckinIndex } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="beers" component={ Beers } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="breweries" component={ BreweriesIndex } onEnter={_redirectIfNotLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  // window.store = configureStore();
  // window.signUp = signUp;
  // window.logIn = logIn;
  // // window.logOut = logOut;
  // window.store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

// <Root store={ store } />,
