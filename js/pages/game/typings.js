//@flow
export type GamePageProps = {
  setOpenedCard: (cardName: string, closeFunc: () => void) => void,
  cards: Array<string>
};
export type GamePageState = {

};