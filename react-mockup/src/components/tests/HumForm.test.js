import React from 'react';
import HumForm from '../hums/HumForm';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/auth.js');

describe('HumForm snapshot', () => {
  it('can match a snapshot', () => {
    const onChange = jest.fn();
    const tree = shallow(
      <MemoryRouter>
        <HumForm onChange={onChange} hum='' onSubmit={onChange} />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
