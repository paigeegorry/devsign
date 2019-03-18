import { FETCH_HUMS, CREATE_HUM, UPDATE_HUM } from '../actions/hums';

const initialState = {
  hums: [],
  hum: {},
  humText: '',
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HUMS:
      return {
        ...state,
        hums: action.payload,
        loading: false
      };
    case CREATE_HUM: 
      return {
        ...state,
        hum: action.payload,
        loading: false
      };
    case UPDATE_HUM:
      return {
        ...state,
        humText: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
