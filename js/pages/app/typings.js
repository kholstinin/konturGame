//@flow
type RouteType = 'start' | 'game' | 'end';

export type AppProps = {

};

export type AppState = {
  route: RouteType,
  score: number,
  currentOpenedCard: ?{cardName: string, closeFunc: () => void},
  cards: any, // TODO add class type
};