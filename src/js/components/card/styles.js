import styled from 'styled-components';

const getCardDisplayStyle = status => {
  if (status === 'closed' || status === 'completed') {
    return 'none'
  } else if (status === 'opened') {
    return 'block';
  }
};

const getCardShirtDisplayStyle = status => {
  if (status === 'opened' || status === 'completed') {
    return 'hidden'
  } else if (status === 'closed') {
    return 'visible';
  }
};

export const CardWrapper = styled.div`
  position: relative;
`;

export const CardShirt = styled.img.attrs({
  'data-tid': 'Card-flipped',
})`
  visibility: ${props => getCardShirtDisplayStyle(props.status)};
  width: 100%;
  height: auto;
`;

export const CardImage  = styled.img.attrs({
  'data-tid': 'Card',
})`
  position: absolute;
  left: 0;
  top: 0;
  display: ${props => getCardDisplayStyle(props.status)};
  width: 100%;
  height: auto;
`;
