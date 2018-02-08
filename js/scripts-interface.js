import { Cards } from "./../js/scripts.js";

$(document).ready(function(){
  let arr = [];
  var round = new Cards(0, [5, 3, 0, 2, 4, 1]);
  $("#form").submit(function(event) {
    event.preventDefault();
    round.shuffle();
    // for (var i = 0; i < 6; i++) {
    //   $(".cards").append(
    //     '<form id=card' + i + '>' +
    //       '<span title="Take a guess!"><img src="../img/black-square.jpg" /></span>'
    //       + '<button type=submit>Flip Card</button>'
    //       + '</form>'
    //   );
    // }
    $("#form").empty();
    round.matches.forEach(function(number){
      $(".cards").append(
        '<form id=card' + number + '>' +
          '<span title="Take a guess!"><img src="../img/black-square.jpg" /></span><br>'
          + '<button type=submit>Flip Card</button>'
          + '</form><br>'
      );
    })
    for (let i = 0; i < 6; i++) {
      $("#card" + i).submit(function(event){
        event.preventDefault();
        round.nextRound();
        console.log(round.matches);
        console.log(round.count);
        // if (round.count === 0 && round.matches.includes(0) && round.matches.includes(1)) {
        //   round.matches.splice(round.matches.indexOf(0), 1);
        //   round.matches.splice(round.matches.indexOf(1), 1);
        // }
        // if (round.count === 0 && round.matches.includes(2) && round.matches.includes(3)) {
        //   round.matches.splice(round.matches.indexOf(2), 1);
        //   round.matches.splice(round.matches.indexOf(3), 1);
        // }
        // if (round.count === 0 && round.matches.includes(4) && round.matches.includes(5)) {
        //   round.matches.splice(round.matches.indexOf(4), 1);
        //   round.matches.splice(round.matches.indexOf(5), 1);
        // }
        if (round.count === 0) {
          round.matched.push(i);
          console.log(round.matched + ": matched");
          if (round.matched[0] === round.matched[1] + 3 || round.matched[0] + 3 === round.matched[1]) {
            round.matches.splice(round.matches.indexOf(round.matched[0]), 1);
            round.matches.splice(round.matches.indexOf(round.matched[1]), 1);
          }
          round.matched = [];
          $(".cards").empty();
          round.matches.forEach(function(number){
            $(".cards").append(
              '<form id=card' + number + '>' +
                '<span title="Take a guess!"><img src="../img/black-square.jpg" /></span>'
                + '<button type=submit>Flip Card</button>'
                + '</form>'
            );
          })
        }
        if (round.count === 1) {
          $("#card" + i).empty();
          $("#card" + i).append(
            '<span title="Try to find the matching card!"><img src="../img/card' +
            i + '.jpg" /></span>'
          )
          round.matched.push(i);
        }
        round.shuffle();
      })
    }
  })
})
