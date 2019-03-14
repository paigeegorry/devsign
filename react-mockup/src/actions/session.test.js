import { setSession, SET_SESSION } from './session';

jest.mock('../services/auth.js', () => ({}));

describe('session actions', () => {
  it('can handle the auth', () => {
    const action = setSession();

    expect(action).toEqual({
      type: SET_SESSION,
      payload: Promise.resolve()
    });
  });
});
