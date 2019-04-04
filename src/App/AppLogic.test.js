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

import fetchItems from './fetchItems';

jest.mock('./fetchItems');

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
    const element = (
      <AppLogicComponent results={[]} resultsSet={resultsSet} keywordsSet={keywordsSet} />
    );
    let wrapper;
    beforeEach(() => {
      wrapper = mount(element);
    });
    afterEach(() => {
      wrapper.unmount();
      jest.clearAllMocks();
    });
    test('it renders', () => {
      wrapper = mount(element);
      expect(wrapper).toBeTruthy();
    });
    test('it does not call to fetchItems because keywords is undefined', () => {
      expect(fetchItems).not.toHaveBeenCalled();
    });
    test('it calls to fetchItems when setting some keyword', () => {
      wrapper.setProps({
        keywords: 'foo',
      });
      expect(fetchItems).toHaveBeenCalled();
    });
  });
});
