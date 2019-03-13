import React from 'react';
import renderer from 'react-test-renderer';
import UserDetail from '../user/UserDetail';
import { MemoryRouter } from 'react-router';

describe('UserDetail snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <UserDetail />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
