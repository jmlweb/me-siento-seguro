import React from 'react';
import { shallow } from 'enzyme';

import AppLogic from './AppLogic';

describe('AppLogic', () => {
  const resultsSet = jest.fn();
  const keywordsSet = jest.fn();
  test('it works', () => {
    const element = (
      <AppLogic keywords="" results={[]} resultsSet={resultsSet} keywordsSet={keywordsSet} />
    );
    const wrapper = shallow(element);
    expect(wrapper).toBeTruthy();
  });
});
