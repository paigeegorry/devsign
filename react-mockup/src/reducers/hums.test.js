import reducer from './hums';
import { FETCH_HUMS, CREATE_HUM } from '../actions/hums';

describe('hums reducer', () => {
  it('can fetch hums from state', () => {
    const state = {
      hums: [
        { id: 1234, handle: 'yolo', hum: 'this is my first hum', img: '../../assets/user-image.png' }
      ]
    };

    const reducerTest = reducer(state, {
      type: FETCH_HUMS,
      payload: state.hums
    });
    expect(reducerTest).toEqual({ 
      hums: [
        { id: 1234, handle: 'yolo', hum: 'this is my first hum', img: '../../assets/user-image.png' }
      ] 
    });
  });

  it('can create a hum', () => {
    const state = {
      hum: {}
    };
    const reducerTest = reducer(state, {
      type: CREATE_HUM,
      payload: 'hello'
    });
    expect(reducerTest).toEqual({ hum: 'hello' });
  });
});
