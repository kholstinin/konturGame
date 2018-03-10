//@flow
import type {TCardState} from '../../commons/commonTypings';

export type GamePageProps = {
  score: number,
  setScore: (newScore: number) => void,
  endGame: (finalScore: number) => void,
};

export type GamePageState = {
  cards: Array<string>,
  cardsStatus: TCardState,
};

