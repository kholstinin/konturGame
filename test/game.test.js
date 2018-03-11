import Game from '../src/js/logic/game';

const game = new Game();

describe('Тесты игровой механики', () => {
  test('Количество очков на старте должно быть равно нулю', () => {
    expect(game.getScore()).toBe(0);
  });
});