import axios from "axios";

export const FETCH_TRINOMIAL = "fetch_trinomial";
export const CHECK_TRINOMIAL = "check_trinomial";
export const FETCH_REPORT = "fetch_report";

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
        dispatch({ type: FETCH_REPORT, payload: data })
      })
      .catch();
  }
};

// export function fetchReport() {
//   console.log("Fetching Report");
//   const request = axios.get(`${ROOT_URL}/user/report`);
//
//   return {
//     type: FETCH_REPORT,
//     payload: request
//   };
// }
