import fetchItems from './fetchItems';

describe('fetchItems', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });
  test('Valid promise', async () => {
    const mockFetchPromise = {
      json: () => Promise.resolve({
        foo: 'foo',
      }),
    };
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const result = await fetchItems();
    expect(result).toEqual({
      foo: 'foo',
    });
  });
  test('Invalid promise', async () => {
    const mockFetchPromise = () => {};
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const result = await fetchItems();
    expect(result).toBe('response.json is not a function');
  });
});
