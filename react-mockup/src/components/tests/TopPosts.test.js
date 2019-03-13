import React from 'react';
import renderer from 'react-test-renderer';
import TopPosts from '../user/TopPosts';
import { MemoryRouter } from 'react-router';

describe('TopPosts snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <TopPosts />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
