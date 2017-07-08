import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// need to npm install react-redux router
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import TrinomialShow from './components/trinomial_show';

// you forgot to put in the first argumnet of promise to the applyMiddleware function
// and that caused your API bug
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/trinomial" component={TrinomialShow} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
