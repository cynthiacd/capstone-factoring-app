// import _ from 'lodash';
import { FETCH_TRINOMIAL } from '../actions';

export default function( state = {}, action ) {
  switch (action.type) {
    case FETCH_TRINOMIAL:
      // should I modify the data here or in the component?
      const trinomial_data = action.payload.data
      return trinomial_data;
    default:
    return state;
  };
}
