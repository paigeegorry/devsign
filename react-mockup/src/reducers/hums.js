import { FETCH_HUMS } from '../actions/hums';

const initialState = {
  hums: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HUMS:
      return {
        ...state,
        hums: action.payload
      };
    default:
      return state;
  }
}
