import axios from 'axios';

export const FETCH_TRINOMIAL = 'fetch_trinomial';

const ROOT_URL = "http://localhost:3000"

export function fetchTrinomial() {
  const request = axios.get(ROOT_URL + "/trinomials");

  return {
    type: FETCH_TRINOMIAL,
    payload: request
  };
}
