//@flow
export type RouteType = 'start' | 'game' | 'end';

export type TCardStatus = 'opened' | 'closed' | 'completed';

export type TCard = {
  index: number,
  status: TCardStatus,
}

export type TCardState = {
  cardIndex: TCardStatus
}