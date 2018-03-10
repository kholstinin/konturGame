//@flow
import type {GamePageProps, GamePageState} from './typings';

import React from 'react';
import {Header, GameField, Wrapper} from './styles';
import Card from '../../components/card/card.jsx';

import {IGame} from '../../logic/game'
import Game from '../../logic/game';

class GamePage extends React.Component<GamePageProps, GamePageState> {
  game: IGame;

  constructor() {
    super();
    this.game = new Game();

    this.state = {
      cards: this.game.getCards(),
      cardsStatus: this.game.getCardsStatus(),
    };

    const cardDisplayTimeInMs = 5000;
    setTimeout(this.closeAllCards, cardDisplayTimeInMs)
  }

  render() {
    return (
        <Wrapper>
          <Header>
            <div onClick={this.props.onTryAgainClick}>Начать заново</div>
            <div>Очки: {this.props.score}</div>
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

    this.setState({
      cards: this.game.getCards(),
      cardsStatus: this.game.getCardsStatus(),
    });
    this.props.setScore( this.game.getScore() );

    if (this.game.checkEndOfGame()) {
      this.props.endGame();
    }
  };

  closeAllCards = () => {
    this.game.closeAllCards();
    this.setState({
      cardsStatus: this.game.getCardsStatus(),
    });
  };
}

export default GamePage;