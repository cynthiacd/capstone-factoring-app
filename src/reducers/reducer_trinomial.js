import _ from 'lodash';
import { FETCH_TRINOMIAL, CHECK_TRINOMIAL } from '../actions';

export default function( state = {}, action ) {
  switch (action.type) {

    case FETCH_TRINOMIAL:
      console.log("logging from trinomial reducer:");
      console.log(action.payload);

      if(action.payload.data) {
        return ({ trinomial: action.payload.data });
      } else {
        return ({ trinomial: action.payload });
      }
    case CHECK_TRINOMIAL:
      const newState = { ...state };
      delete newState.trinomial;
      return newState;
    //   return state

    default:
      return state;
  };
}
