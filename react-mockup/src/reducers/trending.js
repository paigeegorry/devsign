import { FETCH_QUOTES } from '../actions/trending';

const initialState = {
  quotes: [],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTES: 
      return { 
        ...state, 
        quotes: payload,
        loading: false
      };
    default:
      return state;
  }
}
