import { fetchHums, FETCH_HUMS } from './hums';

describe('Hum actions', () => {
  it('can handle the fetch action', () => {
    const action = fetchHums();

    expect(action).toEqual({
      type: FETCH_HUMS,
      payload: Promise.resolve()
    });
  });
});
