import styled from 'styled-components';

const backgroundColor = '#1C6F2F';
const columnWidth = 900;

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