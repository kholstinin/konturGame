//@flow
import type {TCardStatus, TOpenedCard, TCardState} from '../commons/commonTypings';

import Cards from './cardUtil';
import {closed, opened, completed} from '../commons/globalConsts';
import {numberOfCards, numberOfPairs, scoreMultiplier} from '../commons/globalParams';

export interface IGame {
  _pairsTotal: number;
  _completedPairs: number;
  score: number;
  _scoreMultiplier: number;
  _cards: Array<string>;
  _cardsStatus: TCardState;
  openedCard: ?TOpenedCard;

  getCards(): Array<string>;
  getCardsStatus(): TCardState;
  getScore(): number;
  closeAllCards(): void;
  __setNewStatusToAllCards(nhewStatus: TCardStatus): void;
  __pairCompleted(): void;
  __pairFailed(): void;
  openCard(cardName: string, cardIndex: number): void;
  checkEndOfGame(): boolean;
}

export default class Game implements IGame {
  _pairsTotal: number;
  _completedPairs: number;
  score: number;
  _scoreMultiplier: number;
  _cards: Array<string>;
  _cardsStatus: TCardState;
  openedCard: ?TOpenedCard;

  constructor(pairs?: number, initialScore?: number, scoreMultiplierArg?: number) {
    this._pairsTotal = pairs || numberOfPairs;
    this._completedPairs = 0;
    this.score = initialScore || 0;
    this._scoreMultiplier = scoreMultiplierArg || scoreMultiplier;

    this._cards = new Cards().getCards();
    this.openedCard = null;
    this.__setNewStatusToAllCards(opened);
  }

  getCards() {
    return this._cards;
  }

  getCardsStatus() {
    return this._cardsStatus;
  }

  getScore() {
    return this.score;
  }

  closeAllCards() {
    this.__setNewStatusToAllCards(closed);
  };

  __setNewStatusToAllCards(newStatus: TCardStatus) {
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

  openCard(cardName: string, cardIndex: number) {
    if (this.openedCard) {
      let newStatus = closed;

      if (this.openedCard.cardName === cardName) {
        this.__pairCompleted();
        newStatus = completed;
      } else {
        this.__pairFailed();
      }

      this._cardsStatus[this.openedCard.cardIndex] = newStatus;
      this._cardsStatus[cardIndex] = newStatus;

      this.openedCard = null;
    } else {
      this.openedCard = {cardIndex, cardName};
      this._cardsStatus[cardIndex] = opened;
    }
  }

  checkEndOfGame(): boolean {
    return this._pairsTotal - this._completedPairs === 0;
  }
}