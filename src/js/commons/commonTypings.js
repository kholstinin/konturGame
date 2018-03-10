//@flow
export type RouteType = 'start' | 'game' | 'end';

export type TCardStatus = 'opened' | 'closed' | 'completed';

export type TOpenedCard = {
  cardIndex: number,
  cardName: string,
}

export type TCardState = {
  [number]: TCardStatus
}