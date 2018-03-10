//@flow
import type {GamePageProps, GamePageState} from './typings';

import React from 'react';
import {Header, HeaderText, GameField, Wrapper} from './styles';
import Card from '../../components/card/card.jsx';

import {cardDisplayTimeInMs} from '../../commons/globalParams';

import {IGame} from '../../logic/game';
import Game from '../../logic/game';

class GamePage extends React.Component<GamePageProps, GamePageState> {
  game: IGame;
  timerId: TimeoutID;

  constructor() {
    super();
    this.game = new Game();

    this.state = {
      cards: this.game.getCards(),
      cardsStatus: this.game.getCardsStatus(),
    };

    this.timerId = setTimeout(this.closeAllCards, cardDisplayTimeInMs);
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
    this.game.openCard(cardName, cardIndex);
    const newScore = this.game.getScore();

    this.setState({
      cards: this.game.getCards(),
      cardsStatus: this.game.getCardsStatus(),
    });

    if (this.game.checkEndOfGame()) {
      this.props.endGame(newScore);
    }

    this.props.setScore(newScore);
  };

  closeAllCards = () => {
    this.game.closeAllCards();
    this.setState({
      cardsStatus: this.game.getCardsStatus(),
    });
  };

  restartGame = () => {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.game = new Game();

    this.setState({
      cards: this.game.getCards(),
      cardsStatus: this.game.getCardsStatus(),
    });
    this.props.setScore(0);

    this.timerId = setTimeout(this.closeAllCards, cardDisplayTimeInMs);
  };
}

export default GamePage;