import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../app/Footer';
import { MemoryRouter } from 'react-router';

describe('Footer snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
