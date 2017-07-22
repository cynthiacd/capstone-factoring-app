import axios from "axios";
import { browserHistory } from 'react-router';
import {
  FETCH_TRINOMIAL,
  CHECK_TRINOMIAL,
  FETCH_REPORT,
  SIGNIN_USER,
  AUTH_USER,
} from './types';

const ROOT_URL = "http://localhost:3000";
// const ROOT_URL = "https://trinomial-factoring-api.herokuapp.com";

export function fetchTrinomial(pattern) {
  return function(dispatch) {
    console.log("fetching a new trinomial");
    axios.get(`${ROOT_URL}/trinomial/${pattern}`)
      .then( ({data}) => { dispatch( { type: FETCH_TRINOMIAL, payload: data } ) })
      .catch({ });
  }
}

// using thunk here - cause we need to checkTrinomial and then fetch a new one
export function checkTrinomial(values, pattern) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/trinomial/check`, values)
      .then( response => {
        dispatch({ type: CHECK_TRINOMIAL })
        // have to make api call - can't use fetchTrinomial() cause that is set up
        // to use the redux-promise middleware ...
        // could probably redo fetchTrinomial to use Thunk and then call the function
        axios.get(`${ROOT_URL}/trinomial/${pattern}`)
          .then( ({data}) => {
            dispatch({ type: FETCH_TRINOMIAL, payload: data })
          })
          .catch( ()=> {} );
      })
      .catch( () => {} );
  }
}

export function fetchReport() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/user/report`)
      .then( ({data}) => {
        console.log("go the report");
        dispatch({ type: FETCH_REPORT, payload: data })
      })
      .catch(
        console.log("failure to get report")
      );
  }
}

export function signinUser({username, password}) {
  return function(dispatch) {
    console.log("made it to singinUser");
    axios.post(`${ROOT_URL}/user/singin`, { username, password })
      .then( response => {
    //     // if good
          // update state to indicate user is authenticated
          dispatch({ type: AUTH_USER })
    //     // save JWT token in the local storage - managed by user browser
    //     // redirect to route '/report'
        browserHistory.push("/report")
      })
      .catch(
        console.log("failure to signin user")
      );
  }
}
