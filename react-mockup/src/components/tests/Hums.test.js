import React from 'react';
import renderer from 'react-test-renderer';
import Hums from '../hums/Hums';
import { MemoryRouter } from 'react-router';

const hums = [
  { id: 1234, handle: 'yolo', hum: 'this is my first hum', img: '../assets/user-image.png' },
  { id: 1235, handle: 'yol0', hum: 'this is my second hum', img: '../assets/user-image.png' },
  { id: 1236, handle: 'y0lo', hum: 'this is my third hum', img: '../assets/user-image.png' },
  { id: 1237, handle: 'y0l0', hum: 'this is my fourth hum', img: '../assets/user-image.png' }
];

describe('Hums snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Hums hums={hums} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
