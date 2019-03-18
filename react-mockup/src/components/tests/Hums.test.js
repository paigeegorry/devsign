import React from 'react';
import Hums from '../hums/Hums';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/auth.js');

const hums = [
  { id: 1234, handle: 'yolo', hum: 'this is my first hum', img: '../assets/user-image.png' },
  { id: 1235, handle: 'yol0', hum: 'this is my second hum', img: '../assets/user-image.png' },
  { id: 1236, handle: 'y0lo', hum: 'this is my third hum', img: '../assets/user-image.png' },
  { id: 1237, handle: 'y0l0', hum: 'this is my fourth hum', img: '../assets/user-image.png' }
];

describe('Hums snapshot', () => {
  it('can match a snapshot', () => {
    const tree = shallow(
      <MemoryRouter>
        <Hums hums={hums} />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
