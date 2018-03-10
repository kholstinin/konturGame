//@flow
import type {TCardState} from '../../commons/commonTypings';

export type GamePageProps = {
  onTryAgainClick: () => void,
  score: number,
  setScore: (newScore: number) => void,
  endGame: () => void,
};

export type GamePageState = {
  cards: Array<string>,
  cardsStatus: TCardState,
};

