import React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';

describe('Logo', () => {
  test('component renders', () => {
    const element = <Logo />;
    const wrapper = shallow(element);
    expect(wrapper).toBeTruthy();
  });
});
