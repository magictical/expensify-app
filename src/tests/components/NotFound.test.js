import React from 'react';
import { shallow } from 'enzyme';
import NotFountpage from '../../components/NotFoundPage';

test('should render NotFoundPage', () => {
  const wrapper = shallow(<NotFountpage />);
  expect(wrapper).toMatchSnapshot();
});
