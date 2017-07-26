import { FETCH_REPORT, AUTH_USER, UNAUTH_USER, NEW_USER, AUTH_ERROR } from '../actions/types';

export default function( state = {}, action ) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, username: action.payload };

    case UNAUTH_USER:
      const newState = { ...state };
      delete newState.username;
      delete newState.newUser;
      newState.authenticated = false;
      return newState;

    case NEW_USER:
      // console.log("in new user reducer");
      return { ...state, newUser: true}

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
