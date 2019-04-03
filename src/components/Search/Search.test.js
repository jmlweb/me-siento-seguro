import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  test('it works', () => {
    const onSubmit = jest.fn();
    const element = <Search initialValue="" title="Foo" onSubmit={onSubmit} />;
    const wrapper = shallow(element);
    // component should render
    expect(wrapper).toBeTruthy();
    // value should be initialValue
    expect(wrapper.state('value')).toBe('');
    // value should change for input
    wrapper.find('input').simulate('change', {
      target: {
        value: 'foo',
      },
    });
    expect(wrapper.state('value')).toBe('foo');
    // form should call onSubmit
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(onSubmit).toHaveBeenCalledWith('foo');
  });
});
