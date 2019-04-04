import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Logo from './Logo';

describe('Logo', () => {
  const element = <Logo />;
  test('component renders', () => {
    const wrapper = shallow(element);
    expect(wrapper).toBeTruthy();
  });
  test('snapshot', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
