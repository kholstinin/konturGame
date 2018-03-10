import styled from 'styled-components';
import {numberOfCardsInRow} from '../../commons/globalParams';

const bottomMargin = 30;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  font-size: 19px;
  line-height: 19px;
  margin-bottom: ${bottomMargin}px;
`;

const gap = 20;

export const GameField = styled.div`
  display: grid;    
  grid-template-columns: repeat(${numberOfCardsInRow}, 1fr);
  grid-row-gap: ${gap}px;
  grid-column-gap: ${gap}px;
`;

export const HeaderText = styled.div.attrs({
  'data-tid': 'Menu-newGame',
})`
  font-weight: normal;
  cursor: pointer;
`;

export const Wrapper = styled.div.attrs({
  'data-tid': "Deck",
})` 
  height: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;    
`;