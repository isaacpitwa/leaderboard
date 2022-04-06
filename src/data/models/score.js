export default class Score {
  constructor({ player, score }) {
    this.player = player;
    this.score = score;
  }

  tojson() {
    return JSON.stringify({
      user: this.player,
      score: this.score,
    });
  }
}