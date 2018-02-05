//@flow
import type {CardProps, CardState} from './typings';

import React from 'react';
import {StyledImage} from './styles';

export default class Card extends React.Component<CardProps, CardState> {
  backImagePath = './static/img/CardBack.png';

  constructor(props) {
    super(props);
    this.state = {
      imagePath: this.backImagePath,
    }
  }

  render() {

    return (
        <div onClick={this.openCard}>
          <StyledImage src={this.state.imagePath}/>
        </div>
    );
  }

  openCard = () => {
    this.setState({
      imagePath: this.props.path,
    });
    this.props.onCardClick(this.props.cardName, this.closeCard)
  };

  closeCard = () => {
    this.setState({
      imagePath: this.backImagePath,
    });
  };
}