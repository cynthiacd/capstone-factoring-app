import { combineReducers } from 'redux';
import TrinomialReducer from './reducer_trinomial';

const rootReducer = combineReducers({
  trinomial: TrinomialReducer
});

export default rootReducer;
