import Game from '../src/js/logic/game';

const game = new Game();
describe('Тесты игровой механики', () => {
  test('', () => {
    expect(game.getScore()).toBe(0);
  });
});