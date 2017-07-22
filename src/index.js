import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

import App from './components/app';
import RequireAuth from './components/auth/require_auth';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Video from './components/instructional_video';
import LearnPatterns from './components/learn_patterns';
import TrinomialShow from './components/trinomial/trinomial_show';
import Report from './components/trinomial/trinomial_progress_report';

// promise is a middleware that we import - can write own if you want...
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// preparing token - if there is a token in the browser then user is signed in
const token = localStorage.getItem('token');
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ LearnPatterns } />
        <Route path="learn_video" component={ Video } />
        <Route path="signin" component={ Signin } />
        <Route path="signup" component={ Signup } />
        <Route path="signout" component={ Signout } />
        <Route path="report" component={ RequireAuth(Report) } />
        <Route path="practice/:pattern" component={ RequireAuth(TrinomialShow) } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container')
);
