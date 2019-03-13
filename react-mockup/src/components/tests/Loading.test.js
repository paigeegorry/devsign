import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../app/Loading';
import { MemoryRouter } from 'react-router';

describe('Loading snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Loading />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
