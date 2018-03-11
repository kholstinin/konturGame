import CardsGenerator from '../src/js/logic/cardsGenerator';

const cards = new CardsGenerator();
const cardsArr = cards.getCards();

describe('Тесты генерации массива карт', () => {
  test('Должен возвращать массив длиной 18 элементов', () => {
    expect(cardsArr).toHaveLength(18);
  });

  test('В массиве должно быть 9 уникальных карт', () => {
     const uniqueCards = {};
     let cardsCounter = 0;

     cardsArr.forEach(cardName => {
       if (!uniqueCards[cardName]) {
         uniqueCards[cardName] = true;
         cardsCounter++;
       }
     });

    expect(cardsCounter).toBe(9);
  });
});