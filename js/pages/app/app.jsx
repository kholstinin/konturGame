//@flow
import type {AppProps, AppState} from './typings';

import React from 'react';
import baseStyles from '../../components/baseStyles/base-styles';
import {Background, Column} from './styles';

import StartPage from '../start/startPage.jsx';
import GamePage from '../game/gamePage.jsx';
import EndPage from '../end/endPage.jsx';
import Cards from '../../commons/cardUtil';

export default class App extends React.Component<AppProps, AppState> {
  timerId = null;
  closeCards = null;
  currentOpenedCard = null;

  constructor(props: AppProps) {
    super(props);
    const cards = new Cards();

    this.state = {
      route: 'start',
      score: 0,
      currentOpenedCard: null,
      cards: cards,
    };
  }

  render() {
    baseStyles();
    return (
        <Background>
          <Column>
            {this.state.route === 'start' ?
                <StartPage onStartGameClick={this.startGame}/> :
                null}
            {this.state.route === 'game' ?
                <GamePage cards={this.state.cards.getCards()}
                          setOpenedCard={this.setOpenedCard}
                /> : null}
            {this.state.route === 'end' ?
                <EndPage onTryAgainClick={this.startGame}
                         score={this.state.score}/> :
                null}
          </Column>
        </Background>
    );
  }

  startGame = () => {
    this.setState({route: 'game'});
  };

  endGame = () => {
    this.setState({route: 'end'});
  };

  setOpenedCard = (cardName: string, closeFunc: () => void): void => {
    const {cards} = this.state;
    if (this.timerId) {
      this.closeCards();
      clearInterval(this.timerId);
      this.timerId = null;
    }

    console.log(this.currentOpenedCard);

    if (!this.currentOpenedCard) {
      this.currentOpenedCard = {cardName, closeFunc};
    } else {
      if (this.currentOpenedCard.cardName === cardName) {
        cards.cardOpen();
        this.currentOpenedCard = null;
        clearInterval(this.timerId);
        this.addScore();
        if (cards.checkEndOfGame()) {
          this.endGame();
        }
      } else {
        this.closeCards = () => {
          this.currentOpenedCard.closeFunc();
          this.currentOpenedCard = null;
          closeFunc();
        };

        this.timerId = setTimeout(() => {
          this.closeCards();
          this.timerId = null;
        }, 1000);
      }
    }
  };

  addScore() {
    this.setState({score: this.state.score + 5});
  }
}