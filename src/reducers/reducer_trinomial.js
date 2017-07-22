import { FETCH_TRINOMIAL, CHECK_TRINOMIAL } from '../actions/types';

export default function( state = {}, action ) {
  switch (action.type) {

    case FETCH_TRINOMIAL:
      console.log("logging from trinomial reducer - going to attach a trinomial to state");

      // need to figure out how to get app middleware to return action.payload.data ...
      // // Need to add error handling with API
      // if(action.payload.data) { return ({ trinomial: action.payload.data }); }
      // else { return ({ trinomial: action.payload }); }
      return ({ trinomial: action.payload });
      // return ({ trinomial: action.payload.data });

    // maybe you should change this name check_trinomial - post_solution/work
    case CHECK_TRINOMIAL:
      const newState = { ...state };
      delete newState.trinomial;
      return newState;

    default:
      return state;
  };
}
