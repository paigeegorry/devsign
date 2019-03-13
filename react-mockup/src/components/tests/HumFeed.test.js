import React from 'react';
import renderer from 'react-test-renderer';
import HumFeed from '../hums/HumFeed';
import { MemoryRouter } from 'react-router';

describe('Humfeed Snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <HumFeed />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
