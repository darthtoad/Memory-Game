export class Cards {
  constructor(count, matches) {
    this.count = 0;
    this.matches = matches;
    this.matched = [];
  }

  nextRound() {
    if (this.count === 0) {
      this.count = 1;
    } else {
      this.count = 0;
    }
    return this.count;
  };

  shuffle() {
    let i = 0;
    let j = 0;
    let temp = null;

  // While there remain elements to shuffle...
    for (i = this.matches.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this.matches[i]
      this.matches[i] = this.matches[j]
      this.matches[j] = temp
    }
  }
}
