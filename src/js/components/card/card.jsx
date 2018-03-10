//@flow
import type {CardProps, CardState} from './typings';

import React from 'react';
import {CardShirt, CardImage, CardWrapper} from './styles';

import {closed} from '../../commons/globalConsts';

class Card extends React.Component<CardProps, CardState> {
  render() {
    const {status, cardName} = this.props;
    return (
        <CardWrapper onClick={this.openCard}>
          <CardShirt alt='Card shirt' status={status} src={require('../../../img/CardBack.png')}/>
          <CardImage alt={cardName} status={status} src={require(`../../../img/cards/${cardName}.png`)} />
        </CardWrapper>
    );
  }

  openCard = () => {
    if (this.props.status === closed) {
      this.props.onCardClick(this.props.cardName, this.props.cardIndex);
    }
  };
}

export default Card;