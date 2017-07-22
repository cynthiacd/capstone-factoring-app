import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
// import TrinomialIndex from './components/trinomial_index';
import App from './components/app';
// import Auth from './components/auth';

import TrinomialShow from './components/trinomial/trinomial_show';
import TrinomialProgressCharts from './components/trinomial/trinomial_progress_charts';

import UserNew from './components/user_new';

import Video from './components/instructional_video';
import LearnPatterns from './components/learn_patterns';


// promise is a middleware that we import - can write own if you want...
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component= { LearnPatterns } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container')
);
