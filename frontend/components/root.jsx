import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Splash from './splash/splash';

//Add on Enter validations for page / redirect to splash if not logged in, redirect to main if logged in
// Make index route splash, redirect to /
const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ Splash }/>
      </Router>
    </Provider>
  );
};

export default Root;
