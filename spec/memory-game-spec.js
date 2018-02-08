import { Cards } from "./../js/scripts.js";

describe('Cards', function(){
  it ('should instantiate the Cards object correctly', function(){
    var cards = new Cards(0, [0, 1, 2, 3, 4, 5]);
    expect(cards instanceof Cards).toEqual(true);
  })

  it ('should change round 0 to round 1 when requested', function(){
    var cards = new Cards(0, [0, 1, 2, 3, 4, 5]);
    cards.nextRound();
    expect(cards.count).toEqual(1);
  })

  it('should change round 1 to round 0 when requested', function(){
    var cards = new Cards(1, [0, 1, 2, 3, 4, 5]);
    cards.nextRound();
    expect(cards.count).toEqual(0);
  })

  it('should shuffle cards when shuffled', function(){
    var cards = new Cards(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    const card = cards.matches[0];
    cards.shuffle();
    const card1 = cards.matches[0];
    expect(card).not.toEqual(card1);
  })
})
