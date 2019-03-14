import { getHums } from '../services/hums';

export const FETCH_HUMS = 'FETCH_HUMS';
export const fetchHums = () => ({
  type: FETCH_HUMS,
  payload: getHums()
});

export const CREATE_HUM = 'CREATE_HUM';
export const createHum = hum => ({
  type: CREATE_HUM,
  payload: hum
});
