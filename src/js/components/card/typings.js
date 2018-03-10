//@flow
import type {TCardStatus} from '../../commons/commonTypings';

export type CardProps = {
  cardName: string,
  cardIndex: number,
  status: TCardStatus,
  onCardClick: (cardName: string, cardIndex: number) => void,
};

export type CardState = {

};