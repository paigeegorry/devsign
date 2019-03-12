import React from 'react';
import renderer from 'react-test-renderer';
import HumsByUser from '../HumsByUser';
import { MemoryRouter } from 'react-router';

describe('HumsByUser snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <HumsByUser />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
