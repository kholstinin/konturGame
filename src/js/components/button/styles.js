import styled from 'styled-components';

export const StyledButton = styled.button.attrs({
  target: '_blank',
})`
  border: 0;

  height: 42px;
  line-height: 42px;
  background-color: #fff;
  color: #1C7430;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  font-family: 'OpenSansBold';
  letter-spacing: 0;
  padding: 0 20px;
  cursor: pointer;
`;