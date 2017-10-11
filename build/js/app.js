(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = exports.Character = function () {
  function Character(name) {
    _classCallCheck(this, Character);

    this.name = name;
    this.level = 1; // Max 50
    this.health = 100;
    this.dexterity = 100;
    this.strength = 100;
    this.abilityPoints = 100;
  }

  _createClass(Character, [{
    key: "levelUp",
    value: function levelUp() {
      if (this.level === 50) {
        return this.level;
      } else {
        this.level += 1;
        return this.level;
      }
    }
  }]);

  return Character;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _character = require('./../js/character.js');

$(document).ready(function () {
  var char = new _character.Character('Bob');
  // alert(`Character ${char.name} is level ${char.level}.`);
  char.levelUp();
  // alert(`Character ${char.name} is now level ${char.level}.`);
});

},{"./../js/character.js":1}]},{},[2]);
