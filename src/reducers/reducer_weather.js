import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // NOT to use array.push. This immutes state.
      // return state.concat([action.payload.data]);
      // This is idential to above. create a new array and add action.payload.data and state 
      return [ action.payload.data, ...state ]; // [city, city, city] NOT [city, [city, city]]
  }
  return state;
}