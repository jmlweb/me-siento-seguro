import reducer, {
  initialState, ACTIONS, KEYWORDS_SET, RESULTS_SET,
} from './duck';

describe('duck', () => {
  const keywordsAction = ACTIONS.keywordsSet('foo');
  const resultsAction = ACTIONS.resultsSet(['a', 'b', 'c']);
  test('actions creators return proper actions', () => {
    expect(keywordsAction).toEqual({
      type: KEYWORDS_SET,
      payload: 'foo',
    });
    expect(resultsAction).toEqual({
      type: RESULTS_SET,
      payload: ['a', 'b', 'c'],
    });
  });
  test('reducer builds proper new state', () => {
    expect(reducer(initialState, keywordsAction)).toEqual({
      keywords: 'foo',
      results: [],
    });
    expect(reducer(initialState, resultsAction)).toEqual({
      keywords: undefined,
      results: ['a', 'b', 'c'],
    });
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });
});
