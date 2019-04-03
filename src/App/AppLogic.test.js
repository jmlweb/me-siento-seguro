import React from 'react';
import { mount } from 'enzyme';

import { AppLogicComponent, mapStateToProps } from './AppLogic';

describe('AppLogic', () => {
  describe('mapStateToProps', () => {
    const state = {
      keywords: 'foo',
      results: ['bar'],
    };
    const propsFromState = mapStateToProps(state);
    expect(propsFromState.keywords).toBe('foo');
    expect(propsFromState.results).toEqual(['bar']);
  });
  describe('Component', () => {
    const resultsSet = jest.fn();
    const keywordsSet = jest.fn();
    test('it works', () => {
      const element = (
        <AppLogicComponent
          keywords=""
          results={[]}
          resultsSet={resultsSet}
          keywordsSet={keywordsSet}
        />
      );
      const wrapper = mount(element);
      expect(wrapper).toBeTruthy();
    });
  });
});
