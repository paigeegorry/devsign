import React from 'react';
import renderer from 'react-test-renderer';
import HumForm from '../HumForm';
import { MemoryRouter } from 'react-router';

describe('HumForm snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <HumForm />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
