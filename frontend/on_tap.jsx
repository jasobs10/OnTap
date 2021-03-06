import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Splash from './components/splash/splash';
import CheckinIndex from './components/checkin/checkin_index';
import Navbar from './components/shared/navbar';
import Beers from './components/beers/beers';
import BreweriesIndex from './components/breweries/breweries_index';
import {requestBeers} from './reducers/beers_redux';
import BeerShow from './components/beers/beer_show';
import BreweryShow from './components/breweries/brewery_show';
import UserShow from './components/user/user_show';


const App = (props) => {
  let nav = (<div></div>);
  if(props.location.pathname !== "/"){
    nav = <Navbar />
  }

  document.title = "Welcome to OnTap"

  return (
    <div className="main-wrapper">
      { nav }
      { props.children }
      <footer className="splash-footer">
        <div className="myinfo-container">
          <span>Jason Liu</span>
          <span><a className="personal-link" href="http://www.jason-liu.net" target="_blank"><i className="fa fa-id-card-o" aria-hidden="true"></i>&nbsp;Portfolio</a></span>
          <span><a className="personal-link" href="https://github.com/jasobs10" target="_blank"><i className="fa fa-github" aria-hidden="true"></i>&nbsp;Github</a></span>
          <span><a className="personal-link" href="https://www.linkedin.com/in/jasobs10/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i>&nbsp;LinkedIn</a></span>
        </div>
        <span className="ontap-name">© ONTAP, 2017</span>
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
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Splash } onEnter={_redirectIfLoggedIn}/>
          <Route path="/home" component={ CheckinIndex } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/beers" component={ Beers } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/beers/:beerId" component={ BeerShow } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/breweries" component={ BreweriesIndex } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/breweries/:breweryId" component={ BreweryShow } onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/users/:userId" component={ UserShow } onEnter={_redirectIfNotLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
