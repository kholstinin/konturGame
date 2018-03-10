//@flow
import type {ButtonProps, ButtonState} from './typings';

import React from 'react';
import {StyledButton} from './styles';

export default class Button extends React.Component<ButtonProps, ButtonState> {
  render() {
    return <StyledButton onClick={this.props.onClick}>{this.props.text}</StyledButton>
  }
}