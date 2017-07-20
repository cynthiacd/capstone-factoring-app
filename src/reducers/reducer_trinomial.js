import _ from 'lodash';
import { FETCH_TRINOMIAL, CHECK_TRINOMIAL } from '../actions';

export default function( state = {}, action ) {
  switch (action.type) {

    case FETCH_TRINOMIAL:
      console.log("logging from trinomial reducer - going to attach a trinomial to state");

      if(action.payload.data) { return ({ trinomial: action.payload.data }); }
      else { return ({ trinomial: action.payload }); }

    case CHECK_TRINOMIAL:
      const newState = { ...state };
      delete newState.trinomial;
      return newState;

    default:
      return state;
  };
}
