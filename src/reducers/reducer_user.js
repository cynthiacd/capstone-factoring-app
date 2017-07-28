// import _ from 'lodash';
import { FETCH_REPORT, AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function( state = {}, action ) {
  switch (action.type) {
    case AUTH_USER:
      return  { ...state, authenticated: true, username: action.payload, errors: undefined };

    case UNAUTH_USER:
      return { ...state, authenticated: false, username: undefined, errors: undefined };

    case AUTH_ERROR:
      return { ...state, errors: action.payload };

    case FETCH_REPORT:
      return { ...state, report: action.payload };

    default:
      return state;
  };
}
