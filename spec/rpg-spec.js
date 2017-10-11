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
});
