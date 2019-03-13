import { getHums } from '../../services/tweets';

export const FETCH_HUMS = 'FETCH_HUMS';
export const fetchHums = () => ({
  type: FETCH_HUMS,
  payload: getHums()
});
