
// using Thunk as middleware - all actions will return a function
// Thunk gets appllied in the main index.js file
import axios from "axios";
import { hashHistory } from 'react-router';
import {
  FETCH_TRINOMIAL,
  CHECK_TRINOMIAL,
  FETCH_REPORT,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  NEW_USER
} from './types';

// const ROOT_URL = "http://localhost:3000";
const ROOT_URL = "https://factoring-api.herokuapp.com";

export function fetchTrinomial(pattern) {
  return function(dispatch) {
    // console.log("fetching a new trinomial");
    axios.get(`${ROOT_URL}/trinomial/${pattern}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then( ({data}) => { dispatch( { type: FETCH_TRINOMIAL, payload: data } )
      }).catch(
        () => {}
      );
  }
}

export function checkTrinomial(values, pattern) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/trinomial/check`, values, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(
        response => {
          dispatch( {type: CHECK_TRINOMIAL}  );
          dispatch( fetchTrinomial(pattern) );
      }).catch(
        () => {}
      );
  }
}

export function fetchReport() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/user/report`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then( ({data}) => {
        dispatch({ type: FETCH_REPORT, payload: data })
      })
      .catch(
        () => {}
      );
  }
}

export function signupUser( {username, password, password_confirmation} ) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/user/signup`, { username, password, password_confirmation })
      .then(
        response => {
          dispatch( {type: NEW_USER} );
          hashHistory.push("/signin");
        }
      ).catch(
        error => {
          const errors = error.response.data;
          dispatch( authError(errors) );
        }
      );
  }
}

export function signinUser({username, password}) {
  return function(dispatch) {
    // console.log("made it to singinUser");
    axios.post(`${ROOT_URL}/user/signin`, { username, password })
      .then( response => {
        // if good
        // update state to indicate user is authenticated
        dispatch({ type: AUTH_USER, payload: username });
        // save JWT token in the local storage - managed by user's browser
        localStorage.setItem('token', response.data.auth_token);
        // redirect to route '/report'
        hashHistory.push("/report");
      }).catch(
        () => { dispatch( authError("Invalid username and/or password") )}
      );
  }
}

export function signoutUser() {
  return function(dispatch) {
    localStorage.removeItem('token');
    dispatch( { type: UNAUTH_USER } );
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
