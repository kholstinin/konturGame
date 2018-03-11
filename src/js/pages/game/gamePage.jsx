//@flow
import type {GamePageProps, GamePageState} from './typings';

import React from 'react';
import {Header, HeaderText, GameField, Wrapper} from './styles';
import Card from '../../components/card/card.jsx';

import {
  initialCardDisplayTimeInMs,
  cardDisplayTimeInMs,
} from '../../commons/globalParams';

import {IGame} from '../../logic/game';
import Game from '../../logic/game';

class GamePage extends React.Component<GamePageProps, GamePageState> {
  game: IGame;
  initialTimerId: ?TimeoutID;
  timerIdOfOpenedCards: ?TimeoutID;
  calculateFn: () => void;

  constructor() {
    super();
    this.game = new Game();

    this.state = {
      cards: this.game.getCards(),
      cardsStatus: this.game.getCardsStatus(),
    };

    this.initialTimerId = setTimeout(this.closeAllCards,
        initialCardDisplayTimeInMs);
  }

  render() {
    return (
        <Wrapper>
          <Header>
            <HeaderText onClick={this.restartGame}>Начать заново</HeaderText>
            <div data-tid='Menu-scores'>Очки: {this.props.score}</div>
          </Header>
          <GameField>
            {this.state.cards.map((cardName, index) =>
                <Card key={index}
                      onCardClick={this.openCard}
                      cardIndex={index}
                      cardName={cardName}
                      status={this.state.cardsStatus[index]}
                />)}
          </GameField>
        </Wrapper>
    );
  }

  openCard = (cardName: string, cardIndex: number) => {
    if (this.timerIdOfOpenedCards) {
      clearTimeout(this.timerIdOfOpenedCards);
      this.calculateFn();
      this.timerIdOfOpenedCards = null;
    }

    this.game.openCard(cardName, cardIndex);
    this.setState({
      cardsStatus: this.game.getCardsStatus(),
    });

    this.calculateFn = () => {
      this.game.checkCards();

      const newScore = this.game.getScore();
      this.setState({
        cardsStatus: this.game.getCardsStatus(),
      });

      if (this.game.checkEndOfGame()) {
        this.props.endGame(newScore);
      }

      this.props.setScore(newScore);
      this.timerIdOfOpenedCards = null;
    };

    if (this.game.isCardsOpened()) {
      if (this.game.isCurrentCardsEqual) {
        this.calculateFn();
      } else {
        this.timerIdOfOpenedCards = setTimeout(this.calculateFn,
            cardDisplayTimeInMs);
      }
    }
  };

  closeAllCards = () => {
    this.game.closeAllCards();
    this.setState({
      cardsStatus: this.game.getCardsStatus(),
    });
  };

  restartGame = () => {
    if (this.initialTimerId) {
      clearTimeout(this.initialTimerId);
    }
    if (this.timerIdOfOpenedCards) {
      clearTimeout(this.timerIdOfOpenedCards);
    }
    this.timerIdOfOpenedCards = null;
    this.initialTimerId = null;

    this.game = new Game();

    this.setState({
      cards: this.game.getCards(),
      cardsStatus: this.game.getCardsStatus(),
    });
    this.props.setScore(0);

    this.initialTimerId = setTimeout(this.closeAllCards,
        initialCardDisplayTimeInMs);
  };
}

export default GamePage;