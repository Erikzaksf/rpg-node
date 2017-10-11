import { Character } from './../js/character.js';

describe('Character', function() {
  let testChar;
  beforeEach(function() {
    testChar = new Character('Bob');
  });

  describe('constructor', function() {
    it("sets the character's name to the inputted name", function() {
      expect(testChar.name).toEqual('Bob');
    });

    it("sets the character's starting level to 1", function() {
      expect(testChar.level).toEqual(1);
    });
  });

  describe('levelUp', function() {
    it("does not allow a character to level past 50", function() {
      testChar.level = 50;
      expect(testChar.levelUp()).toEqual(50);
    });
  });

  describe('damageHealth', function() {
    it("removes the given amount from the character's health", function() {
      testChar.damageHealth(10);
      expect(testChar.health).toEqual(90);
    });
  });

  describe('heal', function() {
    it("adds the given amount to the character's health", function() {
      testChar.health = 10;
      testChar.heal(80);
      expect(testChar.health).toEqual(90);
    });

    it("does not go above 100", function() {
      testChar.health = 30;
      testChar.heal(80);
      expect(testChar.health).toEqual(100);
    });
  });
});
