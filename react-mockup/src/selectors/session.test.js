import { getToken } from './session';

describe('session selector', () => {
  it('can get a token from state', () => {
    const state = {
      session: {
        token: 'token',
        handle: '',
        id: '',
        profilePicture: ''
      }
    };

    const token = getToken(state);
    expect(token).toEqual('token');
  });
});
