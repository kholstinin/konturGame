//@flow
import {RouteType, TCard, TCardState} from '../../commons/commonTypings'

export type AppProps = {

};

export type AppState = {
  route: RouteType,
  score: number,
  currentOpenedCard: ?{cardName: string, cardIndex: number},
  cards: Array<TCard>,
  cardsStatus: TCardState
};