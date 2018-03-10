import styled from 'styled-components';

const getCardDisplayStyle = status => {
  if (status === 'closed' || status === 'completed') {
    return 'none'
  } else if (status === 'opened') {
    return 'block';
  }
};

const getCardShirtDisplayStyle = status => {
  console.log(status);
  if (status === 'opened' || status === 'completed') {
    return 'none'
  } else if (status === 'closed') {
    return 'block';
  }
};

export const CardShirt = styled.img`
  display: ${props => getCardShirtDisplayStyle(props.status)};
  width: 100%;
  height: auto;
`;

export const CardImage  = styled.img`
  display: ${props => props.status === 'opened' ? 'block' : 'none'};
  width: 100%;
  height: auto;
`;
