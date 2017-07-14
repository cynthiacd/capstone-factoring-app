import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// need to npm install react-redux router
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import TrinomialIndex from './components/trinomial_index';
import TrinomialProgressCharts from './components/trinomial_progress_charts';
import TrinomialShow from './components/trinomial_show';
import UserNew from './components/user_new';

// you forgot to put in the first argumnet of promise to the applyMiddleware function
// and that caused your API bug
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/user/new" component={ UserNew } />
          <Route path="/practice" component={ TrinomialShow } />
          <Route path="/" component={ ()=> ( <div><TrinomialIndex/><TrinomialProgressCharts/></div> ) }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

  // { ()=> (<div><TrinomialShow/><TrinomialInputForm/></div>) }
