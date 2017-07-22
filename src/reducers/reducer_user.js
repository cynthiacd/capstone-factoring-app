import { FETCH_REPORT } from '../actions/types';


export default function( state = {}, action ) {
  switch (action.type) {
    case FETCH_REPORT:
      console.log("logging from fetch report reducer:");
      console.log(action.payload );
      return ( { report: action.payload } );
    default:
      return state;
  };
}
