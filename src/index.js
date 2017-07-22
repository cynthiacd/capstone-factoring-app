import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
// import { AUTH_USER } from './actions';

import App from './components/app';
// import RequireAuth from './components/auth/require_auth';
import Signin from './components/auth/signin';
// import Signup from './components/auth/singup';
// import Singout from './components/auth/singout';

import TrinomialShow from './components/trinomial/trinomial_show';
import Report from './components/trinomial/trinomial_progress_report';

import Video from './components/instructional_video';
import LearnPatterns from './components/learn_patterns';


// promise is a middleware that we import - can write own if you want...
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// preparing code for token storage
// const token = localStorage.getItem('token');
// // If we have a token, consider the user to be signed in
// if (token) {
//   // we need to update application state
//   store.dispatch({ type: AUTH_USER });
// }



ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ LearnPatterns } />
        <Route path="singin" component={ Signin } />
        <Route path="report" component={ Report } />
        <Route path="practice/:pattern" component={ TrinomialShow } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container')
);
