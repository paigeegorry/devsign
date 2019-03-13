import React from 'react';
import renderer from 'react-test-renderer';
import UserInfo from '../user/UserInfo';
import { MemoryRouter } from 'react-router';

describe('UserInfo snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <UserInfo />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
