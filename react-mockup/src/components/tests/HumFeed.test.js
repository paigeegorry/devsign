import React from 'react';
import renderer from 'react-test-renderer';
// import HumFeed from '../hums/HumFeed';
import { MemoryRouter } from 'react-router';
// import { Provider } from 'react-redux';
// import store from '../../store';

jest.mock('../../services/auth.js');

describe('Humfeed Snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      // <Provider store={store}>
        <MemoryRouter>
          {/* <HumFeed /> */}
        </MemoryRouter>
      // </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
