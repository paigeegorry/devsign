import { combineReducers } from 'redux';
import hums from './hums';
import session from './session';

export default combineReducers({
  hums,
  session
});
