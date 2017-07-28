import { FETCH_TRINOMIAL, REMOVE_TRINOMIAL } from '../actions/types';

export default function( state = {}, action ) {
  switch (action.type) {

    case FETCH_TRINOMIAL:
      return { ...state, trinomial: action.payload }

    case REMOVE_TRINOMIAL:
      const newState = { ...state };
      delete newState.trinomial;
      return newState;

    default:
      return state;
  };
}
