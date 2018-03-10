//@flow
import type {AppProps, AppState} from './typings';

import React from 'react';

import {Background, Column} from './styles';

import StartPage from '../start/startPage.jsx';
import GamePage from '../game/gamePage.jsx';
import EndPage from '../end/endPage.jsx';

import Cards from '../../commons/cardUtil';
import Game from '../../commons/gameLogic';

const closed = 'closed';
const opened = 'opened';
const completed = 'completed';

class App extends React.Component<AppProps, AppState> {
  openedCard = null;

  constructor() {
    super();

    const cardDisplayTimeInMs = 5000;
    setTimeout(this.closeAllCards, cardDisplayTimeInMs);
    const cards = new Cards();
    this.game = new Game();

    this.state = {
      route: 'start',
      score: 0,
      cards: cards.getCards(),
      cardsStatus: this.setInitialCardsStatus(),
    };
  }

  render() {
    const {route, cards, cardsStatus, score} = this.state;
    return (
        <Background>
          <Column>
            {route === 'start' ?
                <StartPage onStartGameClick={this.startGame}/> :
                null}
            {route === 'game' ?
                <GamePage cards={cards}
                          setOpenedCard={this.openCard}
                          score={score}
                          cardsStatus={cardsStatus}
                /> : null}
            {route === 'end' ?
                <EndPage onTryAgainClick={this.startGame}
                         score={score}/> :
                null}
          </Column>
        </Background>
    );
  }

  openCard = (cardIndex: number, cardName: string) => {
    if (this.openedCard) {
      let newStatus = closed;
      if (this.openedCard.cardName === cardName) {
        this.game.pairComplete();
        newStatus = completed;
      } else {
        this.game.pairFailed();
      }

      const newState = {
        [this.openedCard.cardIndex]: newStatus,
        [cardIndex]: newStatus,
      };

      this.setState(prevState => {
        return {
          cardsStatus: {...prevState.cardsStatus, ...newState},
          score: this.game.score,
        };
      });

      this.openedCard = null;
    } else {
      this.openedCard = {cardIndex, cardName};
      this.setState((prevState) => {
        return {
          cardsStatus: {...prevState.cardsStatus, [cardIndex]: opened},
        };
      });
    }
  };

  setInitialCardsStatus() {
    return this.setNewStatusToCards(opened);
  }

  closeAllCards = () => {
    const newState = this.setNewStatusToCards(closed);
    this.setState({cardsStatus: newState});
  };

  setNewStatusToCards = (newStatus) => {
    const result = {};

    const numberOfCards = 18;
    for (let index = 0; index < numberOfCards; index++) {
      result[index] = newStatus;
    }

    return result;
  };

  startGame = () => {
    this.setState({route: 'game'});
  };

  endGame = () => {
    this.setState({route: 'end'});
  };
}

export default App;