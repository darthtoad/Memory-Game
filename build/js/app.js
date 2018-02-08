(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cards = exports.Cards = function () {
  function Cards(count, matches) {
    _classCallCheck(this, Cards);

    this.count = 0;
    this.matches = [5, 3, 0, 2, 4, 1];
    this.matched = [];
  }

  _createClass(Cards, [{
    key: "nextRound",
    value: function nextRound() {
      if (this.count === 0) {
        this.count = 1;
      } else {
        this.count = 0;
      }
      return this.count;
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      var currentIndex = this.matches.length;
      var temporaryValue = void 0;
      var randomIndex = void 0;

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
  }]);

  return Cards;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _scripts = require("./../js/scripts.js");

$(document).ready(function () {
  var arr = [];
  var round = new _scripts.Cards(0, arr);
  $("#form").submit(function (event) {
    event.preventDefault();
    // for (var i = 0; i < 6; i++) {
    //   $(".cards").append(
    //     '<form id=card' + i + '>' +
    //       '<span title="Take a guess!"><img src="../img/black-square.jpg" /></span>'
    //       + '<button type=submit>Flip Card</button>'
    //       + '</form>'
    //   );
    // }
    $("#form").empty();
    round.matches.forEach(function (number) {
      $(".cards").append('<form id=card' + number + '>' + '<span title="Take a guess!"><img src="../img/black-square.jpg" /></span><br>' + '<button type=submit>Flip Card</button>' + '</form><br>');
    });

    var _loop = function _loop(i) {
      $("#card" + i).submit(function (event) {
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
          round.matches.forEach(function (number) {
            $(".cards").append('<form id=card' + number + '>' + '<span title="Take a guess!"><img src="../img/black-square.jpg" /></span>' + '<button type=submit>Flip Card</button>' + '</form>');
          });
        }
        if (round.count === 1) {
          $("#card" + i).empty();
          $("#card" + i).append('<span title="Try to find the matching card!"><img src="../img/card' + i + '.jpg" /></span>');
          round.matched.push(i);
        }
        round.shuffle();
      });
    };

    for (var i = 0; i < 6; i++) {
      _loop(i);
    }
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
