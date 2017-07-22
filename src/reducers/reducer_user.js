import { FETCH_REPORT, AUTH_USER, UNAUTH_USER } from '../actions/types';


export default function( state = {}, action ) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };

    case UNAUTH_USER:
      return { ...state, authenticated: false };

    case FETCH_REPORT:
      // console.log("logging from fetch report reducer:");
      // console.log(action.payload );
      return ( { report: action.payload } );
    default:
      return state;
  };
}
