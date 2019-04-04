import getPlaceholder, { PLACEHOLDERS } from './getPlaceholder';

describe('getPlaceholder', () => {
  test('christmas', () => {
    const selDate = new Date('2018-12-01');
    expect(getPlaceholder(selDate)).toBe(PLACEHOLDERS.CHRISTMAS);
  });
  test('summer', () => {
    const selDate = new Date('2018-07-01');
    expect(getPlaceholder(selDate)).toBe(PLACEHOLDERS.SUMMER);
  });
  test('summer', () => {
    const selDate = new Date('2018-03-01');
    expect(getPlaceholder(selDate)).toBe(PLACEHOLDERS.SPRING);
  });
  test('autumn', () => {
    const selDate = new Date('2018-10-01');
    expect(getPlaceholder(selDate)).toBe(PLACEHOLDERS.AUTUMN);
  });
  test('winter', () => {
    const selDate = new Date('2018-1-01');
    expect(getPlaceholder(selDate)).toBe(PLACEHOLDERS.WINTER);
  });
  test('snapshot', () => {
    const selDate = new Date('2018-12-01');
    expect(getPlaceholder(selDate)).toMatchSnapshot();
  });
});
