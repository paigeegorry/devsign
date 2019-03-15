import React from 'react';
import TopPosts from '../user/TopPosts';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('TopPosts snapshot', () => {
  it('can match a snapshot', () => {
    const tree = shallow(
      <MemoryRouter>
        <TopPosts quotes={[]} />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
