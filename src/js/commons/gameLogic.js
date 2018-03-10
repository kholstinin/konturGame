//@flow

export default class Game {
  constructor(pairs: number, initialScore: number, scoreMultiplier: number) {
    this._pairsTotal = pairs || 9;
    this._completedPairs = 0;
    this.score = initialScore || 0;
    this._scoreMultiplier = scoreMultiplier || 42;
  }

  pairComplete(): void {
    this._completedPairs++;
    const uncompletedPairs = this._pairsTotal - this._completedPairs;
    this.score += uncompletedPairs * this._scoreMultiplier;
  }

  pairFailed(): void {
    const lostScore = this._completedPairs * this._scoreMultiplier;
    if (this.score - lostScore < 0) {
      this.score = 0;
    } else {
      this.score -= lostScore;
    }
  }

  checkEndGame(): boolean {
    return !!(this._pairsTotal - this._completedPairs);
  }
}