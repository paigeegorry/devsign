import React from 'react';
import Home from '../Home';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Home snapshot', () => {
  it('can match a snapshot', () => {
    const tree = shallow(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
