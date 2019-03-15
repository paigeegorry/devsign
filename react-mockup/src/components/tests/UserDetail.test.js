import React from 'react';
import UserDetail from '../user/UserDetail';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/auth.js');

describe('UserDetail snapshot', () => {
  it('can match a snapshot', () => {
    const tree = shallow(
      <MemoryRouter>
        <UserDetail />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
