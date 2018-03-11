//@flow
import {getRndInRange, shuffleArray} from '../commons/utils';
import {numberOfCards} from '../commons/globalParams';

export default class CardsGenerator {
  _cards = [];
  _values =  ["5", "6", "7", "8", "9" ,"A", "J", "K", "Q"];
  _suits = ["D", "H", "S", "C"];
  _numberOfPairs = numberOfCards / 2;
  _amountOfValues = this._values.length;
  _amountOfSuits = this._suits.length;

  constructor() {
    this.__generateCards();
    this.__shuffleCards();
  }

  __isCardAlreadyInArray(card: string): boolean {
    return this._cards.includes(card);
  }

  __generateCard(): string {
    const valueIndex = getRndInRange(0, this._amountOfValues);
    const value = this._values[valueIndex];

    const suitIndex = getRndInRange(0, this._amountOfSuits);
    const suit = this._suits[suitIndex];

    return value + suit;
  }

  __generateCards(): void {
    for (let cardIndex = 0; cardIndex < this._numberOfPairs; cardIndex++) {
      let card = this.__generateCard();

      while (true) {
        if (!this.__isCardAlreadyInArray(card)) break;
        card = this.__generateCard();
      }
      this._cards.push(card);
    }

    this._cards = this._cards.concat(this._cards);
  }

  getCards(): Array<string> {
    return this._cards
  }

  __shuffleCards(): void {
    shuffleArray(this._cards);
  }
}