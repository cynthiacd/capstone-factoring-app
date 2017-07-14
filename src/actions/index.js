import axios from "axios";

export const FETCH_TRINOMIAL = "fetch_trinomial";
export const CHECK_TRINOMIAL = "check_trinomial";
export const FETCH_REPORT = "fetch_report";

const ROOT_URL = "http://localhost:3000"

export function fetchTrinomial() {
  const request = axios.get(`${ROOT_URL}/trinomials`);

  return {
    type: FETCH_TRINOMIAL,
    payload: request
  };
}

export function checkTrinomial(values, callback) {
  const request = axios.post(`${ROOT_URL}/trinomials/check`, values)
    .then( () => callback() );

  return {
    type: CHECK_TRINOMIAL,
    payload: request
  };
}

export function fetchReport() {
  console.log("in fetch Report");
  const request = axios.get(`${ROOT_URL}/users/report`);

  return {
    type: FETCH_REPORT,
    payload: request
  };
}
