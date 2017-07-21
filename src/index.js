import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import TrinomialIndex from './components/trinomial_index';
import TrinomialShow from './components/trinomial_show';
import Video from './components/instructional_video';
import LearnPatterns from './components/learn_patterns';
import UserNew from './components/user_new';

// promise is a middleware that we import - can write own if you want...
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/user/new" component={ UserNew } />
          <Route path="/practice/:pattern" component={ TrinomialShow } />
          <Route path="/learn_video" component={ Video } />
          <Route path="/learn_patterns" component={ LearnPatterns } />
          <Route path="/" component={ TrinomialIndex } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

// example of how to return two components - use callback
// { ()=> (<div><TrinomialShow/><TrinomialInputForm/></div>) }
