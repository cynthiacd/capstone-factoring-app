import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import TrinomialIndex from './components/trinomial_index';
import TrinomialShow from './components/trinomial_show';
import Video from './components/instructional_video';
import UserNew from './components/user_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/user/new" component={ UserNew } />
          <Route path="/practice/:pattern" component={ TrinomialShow } />
          <Route path="/practice" component={ TrinomialShow } />
          <Route path="/learn/video" component={ Video } />
          <Route path="/" component={ TrinomialIndex } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

// example of how to return two components - use callback
// { ()=> (<div><TrinomialShow/><TrinomialInputForm/></div>) }
