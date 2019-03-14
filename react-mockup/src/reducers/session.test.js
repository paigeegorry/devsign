import reducer from './session';
import { SET_SESSION } from '../actions/session';

jest.mock('../services/auth.js', () => ({}));

describe('session reducer', () => {
  it('can set session', () => {
    const state = {
      token: '',
      handle: '',
      id: '',
      profilePicture: ''
    };

    const reducerTest = reducer(state, {
      type: SET_SESSION,
      payload: {
        token: 'ektjbnr',
        handle: 'lefnvg',
        id: 'efjlnger',
        profilePicture: 'erjgnelrkjf'
      }
    });
    expect(reducerTest).toEqual({
      token: 'ektjbnr',
      handle: 'lefnvg',
      id: 'efjlnger',
      profilePicture: 'erjgnelrkjf'
    });
  });
});
