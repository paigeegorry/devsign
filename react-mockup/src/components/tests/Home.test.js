import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';
import { MemoryRouter } from 'react-router';

describe('Home snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
