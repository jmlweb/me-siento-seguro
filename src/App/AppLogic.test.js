import React from 'react';
import { mount } from 'enzyme';

import {
  AppLogicComponent,
  getDocumentTitle,
  getVerb,
  mapStateToProps,
  SEARCH,
  TRENDING,
} from './AppLogic';

describe('AppLogic', () => {
  describe('extra', () => {
    test('mapStateToProps', () => {
      const state = {
        keywords: 'foo',
        results: ['bar'],
      };
      const propsFromState = mapStateToProps(state);
      expect(propsFromState.keywords).toBe('foo');
      expect(propsFromState.results).toEqual(['bar']);
    });
    test('getDocumentTitle', () => {
      expect(getDocumentTitle(undefined)).toBe('GiphySearch / Enter search');
      expect(getDocumentTitle('')).toBe('GiphySearch / Trending');
      expect(getDocumentTitle('foo')).toBe('GiphySearch / foo');
    });
    test('getVerb', () => {
      expect(getVerb('')).toBe(TRENDING);
      expect(getVerb('foo')).toBe(SEARCH);
    });
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
