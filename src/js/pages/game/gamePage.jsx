//@flow
import type {GamePageProps, GamePageState} from './typings';

import React from 'react';
import {Header, GameField, Wrapper} from './styles';
import Card from '../../components/card/card.jsx';

class GamePage extends React.Component<GamePageProps, GamePageState> {
  render() {
    return (
        <Wrapper>
          <Header>
            <div>Начать заново</div>
            <div>Очки: {this.props.score}</div>
          </Header>
          <GameField>
            {this.props.cards.map((cardName, index) =>
                <Card key={index}
                      onCardClick={this.props.setOpenedCard}
                      cardIndex={index}
                      cardName={cardName}
                      status={this.props.cardsStatus[index]}
                />)}
          </GameField>
        </Wrapper>
    );
  }
}

export default GamePage;