import { combineReducers } from 'redux';
import hums from './hums';
import session from './session';
import trending from './trending';

export default combineReducers({
  hums,
  session,
  trending
});
