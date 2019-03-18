import { getHums, postHums } from '../services/hums';

export const FETCH_HUMS = 'FETCH_HUMS';
export const fetchHums = () => ({
  type: FETCH_HUMS,
  payload: getHums(),
  loading: true
});

export const CREATE_HUM = 'CREATE_HUM';
export const createHum = hum => ({
  type: CREATE_HUM,
  payload: postHums(hum),
  loading: true
});

export const UPDATE_HUM = 'UPDATE_HUM';
export const updateHum = hum => ({
  type: UPDATE_HUM,
  payload: hum,
  loading: true
});
