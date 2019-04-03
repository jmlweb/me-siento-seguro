import React from 'react';
import { shallow } from 'enzyme';

import List, {
  ITEM_WIDTH, ITEM_HEIGHT, getSpanWStyles, getSpanHStyles,
} from './List';

describe('List', () => {
  test('getSpanWStyles', () => {
    expect(getSpanWStyles({ width: ITEM_WIDTH * 4 + 1 })).toBe('spanW3');
    expect(getSpanWStyles({ width: ITEM_WIDTH * 3 + 1 })).toBe('spanW2');
    expect(getSpanWStyles({ width: ITEM_WIDTH * 2 + 1 })).toBe('spanW1');
  });
  test('getSpanWStyles', () => {
    expect(getSpanHStyles({ height: ITEM_HEIGHT * 4 + 1 })).toBe('spanH3');
    expect(getSpanHStyles({ height: ITEM_HEIGHT * 3 + 1 })).toBe('spanH2');
    expect(getSpanHStyles({ height: ITEM_HEIGHT * 2 + 1 })).toBe('spanH1');
  });
  test('Component', () => {
    const results = [
      {
        title: 'foo',
        id: '123',
        image: {
          url: 'foo.jpg',
          width: 100,
          height: 100,
        },
      },
    ];
    const element = <List hasBeenQueried={false} results={[]} />;
    const wrapper = shallow(element);
    expect(wrapper).toBeTruthy();
    // it should not return "no results" because it hasn't been queried
    expect(wrapper.find('.noResults')).toHaveLength(0);
    // it should return "no results" when been queried
    wrapper.setProps({
      hasBeenQueried: true,
    });
    expect(wrapper.find('.noResults')).toHaveLength(1);
    // it should display 1 item when giving proper results
    wrapper.setProps({
      results,
    });
    expect(wrapper.find('.noResults')).toHaveLength(0);
    expect(wrapper.find('.item')).toHaveLength(1);
  });
});
