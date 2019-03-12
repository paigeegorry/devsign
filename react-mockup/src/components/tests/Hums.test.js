import React from 'react';
import renderer from 'react-test-renderer';
import Hums from '../Hums';
import { MemoryRouter } from 'react-router';

describe('Hums snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Hums />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
