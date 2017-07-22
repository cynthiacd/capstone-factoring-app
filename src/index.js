import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';
// import RequireAuth from './components/auth/require_auth';
import Signin from './components/auth/signin';
// import Signup from './components/auth/singup';
// import Singout from './components/auth/singout';

import TrinomialShow from './components/trinomial/trinomial_show';
import TrinomialProgressCharts from './components/trinomial/trinomial_progress_charts';



import Video from './components/instructional_video';
import LearnPatterns from './components/learn_patterns';


// promise is a middleware that we import - can write own if you want...
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ LearnPatterns } />
        <Route path="singin" component={ Signin } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container')
);
