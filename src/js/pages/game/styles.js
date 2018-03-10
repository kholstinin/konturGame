import styled from 'styled-components';

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
const numberOfColumns = 6;

export const GameField = styled.div`
  display: grid;    
  grid-template-columns: repeat(${numberOfColumns}, 1fr);
  grid-row-gap: ${gap}px;
  grid-column-gap: ${gap}px;
`;

export const Wrapper = styled.div` 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;    
`;