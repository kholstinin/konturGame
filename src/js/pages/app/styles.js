import styled from 'styled-components';
import {columnWidth} from '../../commons/globalParams';

const backgroundColor = '#1C6F2F';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${backgroundColor};
`;

export const Column = styled.div`
  width: ${columnWidth}px;
  margin: 0 auto;
  height: 100%;
`;