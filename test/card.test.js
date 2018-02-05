import Cards from '../js/commons/cardUtil';

const cards = new Cards();

test('should return arr of cards', () => {
  expect(cards.getCards()).toBe([]);
});