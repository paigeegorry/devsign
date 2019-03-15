import React from 'react';
import UserInfo from '../user/UserInfo';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/auth.js');

const handle = 'handle';
const profilePicture = 'https://res.cloudinary.com/dkrup6iyl/image/fetch/v1552429847/https://res.cloudinary.com/dkrup6iyl/image/upload/v1552429521/download.png';

describe('UserInfo snapshot', () => {
  it('can match a snapshot', () => {
    const tree = shallow(
      <MemoryRouter>
        <UserInfo handle={handle} profilePicture={profilePicture} />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
