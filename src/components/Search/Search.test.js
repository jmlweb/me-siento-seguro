import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Search from './Search';

describe('Search', () => {
  const onSubmit = jest.fn();
  const element = <Search initialValue="" title="Foo" onSubmit={onSubmit} />;
  test('it works', () => {
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
  test('snapshot', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
