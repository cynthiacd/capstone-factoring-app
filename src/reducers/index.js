import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TrinomialReducer from './reducer_trinomial';
import UserReducer from './reducer_user';

// here is your one big state object - the redux state object 
const rootReducer = combineReducers({
  trinomial: TrinomialReducer,
  user: UserReducer,
  form: formReducer
});

export default rootReducer;
