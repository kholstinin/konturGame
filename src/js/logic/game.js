//@flow
import type {
  TCardStatus,
  TOpenedCard,
  TCardState,
} from '../commons/commonTypings';

import CardsGenerator from './cardsGenerator';
import {isAllElementsInArrayEqual} from '../commons/utils';
import {closed, opened, completed} from '../commons/globalConsts';
import {
  numberOfCards,
  numberOfPairs,
  scoreMultiplier,
} from '../commons/globalParams';

export interface IGame {
  getCards(): Array<string>;

  getCardsStatus(): TCardState;

  getScore(): number;

  closeAllCards(): void;

  __setNewStatusToAllCards(newStatus: TCardStatus): void;

  __pairCompleted(): void;

  __pairFailed(): void;

  openCard(cardName: string, cardIndex: number): void;

  checkCards(): void;

  checkEndOfGame(): boolean;

  isCardsOpened(): boolean;
}

export default class Game implements IGame {
  _pairsTotal: number;
  _completedPairs: number;
  score: number;
  _scoreMultiplier: number;
  _cards: Array<string>;
  _cardsStatus: TCardState;
  openedCards: Array<TOpenedCard>;
  isCurrentCardsEqual: boolean;

  constructor(
      pairs?: number, initialScore?: number, scoreMultiplierArg?: number) {
    this._pairsTotal = pairs || numberOfPairs;
    this._completedPairs = 0;
    this.score = initialScore || 0;
    this._scoreMultiplier = scoreMultiplierArg || scoreMultiplier;

    this._cards = new CardsGenerator().getCards();
    this.openedCards = [];
    this.__setNewStatusToAllCards(opened);
  }

  getCards(): Array<string> {
    return this._cards;
  }

  getCardsStatus(): TCardState {
    return this._cardsStatus;
  }

  getScore(): number {
    return this.score;
  }

  isCardsOpened(): boolean {
    return this.openedCards.length > 1;
  }

  closeAllCards(): void {
    this.__setNewStatusToAllCards(closed);
  };

  __setNewStatusToAllCards(newStatus: TCardStatus): void {
    const result = {};

    for (let index = 0; index < numberOfCards; index++) {
      result[index] = newStatus;
    }

    this._cardsStatus = result;
  }

  __pairCompleted(): void {
    this._completedPairs++;
    const uncompletedPairs = this._pairsTotal - this._completedPairs;
    this.score += uncompletedPairs * this._scoreMultiplier;
  }

  __pairFailed(): void {
    const lostScore = this._completedPairs * this._scoreMultiplier;
    if (this.score - lostScore < 0) {
      this.score = 0;
    } else {
      this.score -= lostScore;
    }
  }

  checkCards(): void {
    let newStatus = closed;

    if (this.isCurrentCardsEqual) {
      this.__pairCompleted();
      newStatus = completed;
    } else {
      this.__pairFailed();
    }

    this.openedCards.forEach(card => {
      const cardIndex = card.cardIndex;
      this._cardsStatus[cardIndex] = newStatus;
    });

    this.isCurrentCardsEqual = false;
    this.openedCards = [];
  }

  isOpenedCardsEqual() {
    return isAllElementsInArrayEqual(this.openedCards, 'cardName');
  }

  openCard(cardName: string, cardIndex: number): void {
    this._cardsStatus[cardIndex] = opened;
    this.openedCards.push({cardIndex, cardName});

    if (this.openedCards.length > 1) {
      this.isCurrentCardsEqual = this.isOpenedCardsEqual();
    }
  }

  checkEndOfGame(): boolean {
    return this._pairsTotal - this._completedPairs === 0;
  }
}