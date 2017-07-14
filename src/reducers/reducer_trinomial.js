import _ from 'lodash';
import { FETCH_TRINOMIAL, CHECK_TRINOMIAL } from '../actions';

export default function( state = {}, action ) {
  switch (action.type) {

    case FETCH_TRINOMIAL:
      console.log("logging from trinomial reducer:");
      console.log(action.payload.data);

      return ( { trinomial: action.payload.data } );
    case CHECK_TRINOMIAL:
      console.log("logging from checking trinomial - after posting solution to API");
      // what shoudl I return here ? I want a new problem - need to remove the current trinomial
      // I can add to the state any response back from API
      const newState = { ...state };
      delete newState.trinomial;
      // this returns a blank state - no more trinomial attached - hoping this would cause trinomial show to re-render
      // it does but componentDidMount doesn't get called with a re-render so a new problem doesn't appear and stuck on
      // loading
      console.log(newState);
      return newState;

      // lodash method did not work
      // return _.omit( state, action.payload );
    default:
      return state;
  };
}
