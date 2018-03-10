//@flow
import {TCardState} from '../../commons/commonTypings';

export type GamePageProps = {
  cards: Array<string>,
  cardsStatus: TCardState,
  setOpenedCard: (cardIndex: number, cardIndex: number) => void,
};
export type GamePageState = {

};

