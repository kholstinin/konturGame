//@flow
import type {AppProps, AppState} from './typings';

import React from 'react';

import {Background, Column} from './styles';

import StartPage from '../start/startPage.jsx';
import GamePage from '../game/gamePage.jsx';
import EndPage from '../end/endPage.jsx';

class App extends React.Component<AppProps, AppState> {
  constructor() {
    super();

    this.state = {
      route: 'start',
      score: 0,
    };
  }

  render() {
    const {route, score} = this.state;
    return (
        <Background>
          <Column>
            {route === 'start' ?
                <StartPage onStartGameClick={this.startGame}/> :
                null}
            {route === 'game' ?
                <GamePage onTryAgainClick={this.startGame}
                          score={score}
                          setScore={this.setScore}
                          endGame={this.endGame}
                /> : null}
            {route === 'end' ?
                <EndPage onTryAgainClick={this.startGame}
                         score={score}/> :
                null}
          </Column>
        </Background>
    );
  }

  setScore(score: number) {
    this.setState({score})
  }

  startGame = () => {
    this.setState({route: 'game'});
  };

  endGame = () => {
    this.setState({route: 'end'});
  };
}

export default App;