import Cards from '../src/js/commons/cardUtil';

const cards = new Cards();

test('Должен возвращать массив длиной 18', () => {
  expect(cards.getCards()).toHaveLength(18);
});