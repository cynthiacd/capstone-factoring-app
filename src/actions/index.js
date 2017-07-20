import axios from "axios";

export const FETCH_TRINOMIAL = "fetch_trinomial";
export const CHECK_TRINOMIAL = "check_trinomial";
export const FETCH_REPORT = "fetch_report";

const ROOT_URL = "http://localhost:3000";
// const ROOT_URL = "https://trinomial-factoring-api.herokuapp.com";

export function fetchTrinomial(pattern) {
  console.log("Fetching Trinomial");
  // console.log(pattern);
  const request = axios.get(`${ROOT_URL}/trinomial/${pattern}`);
  // console.log(request);

  return {
    type: FETCH_TRINOMIAL,
    payload: request
  };
}
// export function checkTrinomial(values, callback) {
//   const request = axios.post(`${ROOT_URL}/trinomial/check`, values)
//     .then( () => callback() );
//
//   return {
//     type: CHECK_TRINOMIAL,
//     payload: request
//   };
// }


// using thunk here - cause we need to checkTrinomial and then fetch a new one
export function checkTrinomial(values, pattern) {
  // console.log(pattern);
  // using Thunk we get access to dispatch function - gives us more control with
  // async issues
  return function(dispatch) {
    axios.post(`${ROOT_URL}/trinomial/check`, values)
      .then( response => {
        dispatch({ type: CHECK_TRINOMIAL })

        axios.get(`${ROOT_URL}/trinomial/${pattern}`)
          .then( ({data}) => {
            dispatch({ type: FETCH_TRINOMIAL, payload: data })
          })
      })
      // .then( () => {
      //     fetchTrinomial(pattern);
      //     dispatch( {type: FETCH_TRINOMIA L } );
      // })
      .catch( () => { });
  }
}

export function fetchReport() {
  console.log("Fetching Report");
  const request = axios.get(`${ROOT_URL}/user/report`);

  return {
    type: FETCH_REPORT,
    payload: request
  };
}
