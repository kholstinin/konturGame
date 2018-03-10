//@flow
import type {StartPageProps, StartPageState} from './typings';

import React from 'react';
import Button from '../../components/button/button.jsx';
import {Container, Title} from './styles';

export default class StartPage extends React.Component<StartPageProps, StartPageState> {
  render() {
    return (
        <Container>
          <img src={require("../../../img/StartGame.png")}/>
          <Title>Memory Game</Title>
          <div data-tid="NewGame-startGame"><Button onClick={this.props.onStartGameClick} text="Начать игру"/></div>
        </Container>
    );
  }
}