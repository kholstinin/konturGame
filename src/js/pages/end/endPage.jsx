//@flow
import type {EndPageProps, EndPageState} from './typings';

import React from 'react';
import Button from '../../components/button/button.jsx';
import {Container, Title} from './styles';

export default class EndPage extends React.Component<EndPageProps, EndPageState> {

  render() {
    return (
        <Container>
          <img src={require('../../../img/EndGame.png')}/>
          <Title>Поздравляем!<br/> Ваш итоговый счет {this.props.score}</Title>
          <div data-tid="EndGame-retryGame"><Button onClick={this.props.onTryAgainClick} text="Ещё раз"/></div>
        </Container>
    );
  }
}