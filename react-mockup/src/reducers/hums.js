import { FETCH_HUMS, CREATE_HUM, UPDATE_HUM } from '../actions/hums';

const initialState = {
  hums: [],
  hum: '',
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_HUMS:
      return {
        ...state,
        hums: payload,
        loading: false
      };
    case CREATE_HUM: 
      return {
        ...state,
        hums: [...state.hums, payload],
        loading: false
      };
    case UPDATE_HUM:
      return {
        ...state,
        hum: payload,
        loading: false
      };
    default:
      return state;
  }
}
