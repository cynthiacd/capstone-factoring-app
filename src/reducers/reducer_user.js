import { FETCH_REPORT } from '../actions';

export default function( state = {}, action ) {
  switch (action.type) {
    case FETCH_REPORT:
      // console.log("logging from fetch report reducer:");
      // console.log(action.payload.data);
      return ( { report: action.payload.data } );
    default:
      return state;
  };
}
