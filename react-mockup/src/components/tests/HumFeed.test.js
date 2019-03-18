import React from 'react';
import HumFeed from '../hums/HumFeed';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../store';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/auth.js');

describe('Humfeed Snapshot', () => {
  it('can match a snapshot', () => {
    const tree = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <HumFeed />
        </MemoryRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
