//@flow
export type CardProps = {
  path: string,
  onCardClick: (cardName: string, closeFunc: () => void) => void,
};

export type CardState = {
  imagePath: string,
};