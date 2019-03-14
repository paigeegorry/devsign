import { setSession } from './session';

jest.mock('../services/auth.js');

describe('session actions', () => {
  it('can handle the auth', () => {
    const action = setSession();

    expect(action).toEqual({
      payload: Promise.resolve(),
      fulfilledType: 'SET_SESSION_FULFILLED',
      pendingType: 'SET_SESSION_PENDING',
      rejectedType: 'SET_SESSION_REJECTED',
      type: 'SET_SESSION'
    });
  });
});
