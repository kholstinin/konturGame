import Game from '../src/js/logic/game';

const cards = new Cards();
describe('Тесты генерации массива карт', () => {
  test('Должен возвращать массив длиной 18 элементов', () => {
    expect(cards.getCards()).toHaveLength(18);
  });
});