import { FETCH_HUMS, CREATE_HUM } from '../actions/hums';

const initialState = {
  hums: [],
  hum: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HUMS:
      return {
        ...state,
        hums: action.payload
      };
    case CREATE_HUM: 
      return {
        ...state,
        hum: action.payload
      };
    default:
      return state;
  }
}
