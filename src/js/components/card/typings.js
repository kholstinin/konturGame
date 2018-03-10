//@flow
export type CardProps = {
  cardName: string,
  onCardClick: (cardName: string, closeFunc: () => void) => void,
};

export type CardState = {
  imagePath: string,
};