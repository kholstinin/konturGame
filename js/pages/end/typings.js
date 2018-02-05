//@flow
type RouteType = 'start' | 'game' | 'end';

export type EndPageProps = {
  onTryAgainClick: () => void,
  score: number,
};

export type EndPageState = {

}