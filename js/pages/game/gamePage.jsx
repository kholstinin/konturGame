//@flow
import type {GamePageProps, GamePageState} from './typings';

import React from 'react';
import {Header, GameField, Wrapper} from './styles';
import Card from '../../components/card/card.jsx';

export default class GamePage extends React.Component<GamePageProps, GamePageState> {
  render() {
    return (
        <Wrapper>
          <Header>
            <div>Начать заново</div>
            <div>Очки: 0</div>
          </Header>
          <GameField>
            {this.props.cards.map((cardName, index) =>
                <Card key={index}
                      onCardClick={this.props.setOpenedCard}
                      cardName={cardName}
                      path={this.getPath(cardName)}/>)}
          </GameField>
        </Wrapper>
    );
  }

  getPath = (cardName: string): string => {
    return `./static/img/cards/${cardName}.png`;
  };
}