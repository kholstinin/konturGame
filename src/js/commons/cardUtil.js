//@flow
import {getRndInRange, shuffleArray} from './utils';

export default class Cards {
  cards = [];
  values =  ["5", "6", "7", "8", "9" ,"A", "J", "K", "Q"];
  suits = ["D", "H", "S", "C"];
  numberOfCards = 9;
  amountOfValues = this.values.length;
  amountOfSuits = this.suits.length;

  constructor() {
    this.__generateCards();
    this.shuffleCards();
  }

  isCardAlreadyInArray(card: string): boolean {
    return this.cards.includes(card);
  }

  __generateCard(): string {
    const valueIndex = getRndInRange(0, this.amountOfValues);
    const value = this.values[valueIndex];

    const suitIndex = getRndInRange(0, this.amountOfSuits);
    const suit = this.suits[suitIndex];

    return value + suit;
  }

  __generateCards(): void {
    for (let cardIndex = 0; cardIndex < this.numberOfCards; cardIndex++) {
      let card = this.__generateCard();

      while (true) {
        if (!this.isCardAlreadyInArray(card)) break;
        card = this.__generateCard();
      }
      this.cards.push(card);
    }

    this.cards = this.cards.concat(this.cards);
  }

  getCards(): Array<string> {
    return this.cards
  }

  shuffleCards(): void {
    shuffleArray(this.cards);
  }
}