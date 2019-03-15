import { fetchQuotes, FETCH_QUOTES, FETCH_QUOTES_LOADING } from './trending';

jest.mock('../services/simpsonsApi.js');

describe('trending actions', () => {
  it('can handle the fetch quote action', () => {
    const action = fetchQuotes();

    expect(action).toEqual({
      type: FETCH_QUOTES,
      payload: Promise.resolve(),
      loadStart: FETCH_QUOTES_LOADING
    });
  });
});
