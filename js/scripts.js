export class Cards {
  constructor(count, matches) {
    this.count = 0;
    this.matches = [5, 3, 0, 2, 4, 1];
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
    let currentIndex = this.matches.length;
    let temporaryValue;
    let randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.matches[currentIndex];
      this.matches[currentIndex] = this.matches[randomIndex];
      this.matches[randomIndex] = temporaryValue;
    }

    return this.matches;
  }
}
