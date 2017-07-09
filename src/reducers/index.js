import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TrinomialReducer from './reducer_trinomial';

const rootReducer = combineReducers({
  trinomial: TrinomialReducer,
  form: formReducer
});

export default rootReducer;
