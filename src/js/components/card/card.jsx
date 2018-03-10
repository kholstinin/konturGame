//@flow
import type {CardProps, CardState} from './typings';

import React from 'react';
import {CardShirt, CardImage} from './styles';

import {closed} from '../../commons/globalConsts';

class Card extends React.Component<CardProps, CardState> {
  render() {
    const {status} = this.props;
    return (
        <div onClick={this.openCard}>
          <CardShirt status={status} src={require('../../../img/CardBack.png')}/>
          <CardImage status={status} src={require(`../../../img/cards/${this.props.cardName}.png`)} />
        </div>
    );
  }

  openCard = () => {
    if (this.props.status === closed) {
      this.props.onCardClick(this.props.cardName, this.props.cardIndex);
    }
  };
}

export default Card;