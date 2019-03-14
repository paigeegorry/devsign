import { fetchHums, FETCH_HUMS, createHum, CREATE_HUM } from './hums';

describe('Hum actions', () => {
  it('can handle the fetch action', () => {
    const action = fetchHums();

    expect(action).toEqual({
      type: FETCH_HUMS,
      payload: Promise.resolve()
    });
  });

  it('can handle the create hum', () => {
    const action = createHum('hello');

    expect(action).toEqual({
      type: CREATE_HUM,
      payload: 'hello'
    });
  });
});
