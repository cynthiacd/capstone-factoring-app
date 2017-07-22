import { FETCH_TRINOMIAL, CHECK_TRINOMIAL } from '../actions/types';

export default function( state = {}, action ) {
  switch (action.type) {

    case FETCH_TRINOMIAL:
      console.log("logging from trinomial reducer - going to attach a trinomial to state");
      return ({ trinomial: action.payload });

    // maybe you should change this name check_trinomial - post_solution/work
    case CHECK_TRINOMIAL:
      const newState = { ...state };
      delete newState.trinomial;
      return newState;

    default:
      return state;
  };
}
