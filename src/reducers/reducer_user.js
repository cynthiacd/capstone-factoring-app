import { FETCH_REPORT, AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';


export default function( state = {}, action ) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };

    case UNAUTH_USER:
      return { ...state, authenticated: false };

    case AUTH_ERROR:
      return { ...state, errors: action.payload };

    case FETCH_REPORT:
      // console.log("logging from fetch report reducer:");
      // console.log(action.payload );
      return { ...state, report: action.payload };
    default:
      return state;
  };
}
