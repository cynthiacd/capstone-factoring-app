import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
// import TrinomialIndex from './components/trinomial_index';
import App from './components/app';
import Auth from './components/auth';

import TrinomialShow from './components/trinomial/trinomial_show';
import Report from './components/trinomial/trinomail_progress_charts';

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
  , document.querySelector('.container'));

  // 
  // <Route path="signin" component { UserNew } />
  // <Route path="report" component { Auth(Report) } />
  // <Route path="practice/:pattern" component { Auth(TrinomialShow) } />
  //
  // ReactDOM.render(
  //   <Provider store={store}>
  //     <Router history={browserHistory}>
  //       <Route path="/" component={App}>
  //         <IndexRoute component={Welcome} />
  //         <Route path="signin" component={Signin} />
  //         <Route path="signout" component={Signout} />
  //         <Route path="signup" component={Signup} />
  //         <Route path="feature" component={RequireAuth(Feature)} />
  //       </Route>
  //     </Router>
  //   </Provider>
  //   , document.querySelector('.container'));


// example of how to return two components - use callback
// { ()=> (<div><TrinomialShow/><TrinomialInputForm/></div>) }

// <Route path="/user/new" component={ UserNew } />
// <Route path="/practice/:pattern" component={ TrinomialShow } />
// <Route path="/learn_video" component={ Video } />
// <Route path="/learn_patterns" component={ LearnPatterns } />
// <Route path="/" component={ TrinomialIndex } />
