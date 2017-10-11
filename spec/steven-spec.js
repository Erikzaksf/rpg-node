import {Steven} from './../js/steven.js';
import {Character} from './../js/character.js';

describe('Steven', function() {
  let testSteven;

  beforeEach(function() {
    testSteven = new Steven('Steven');
  });

  describe('constructor', function() {
    it("sets stats to Steven's starting values", function() {
      expect(testSteven.health).toEqual(8);
      expect(testSteven.dexterity).toEqual(5);
      expect(testSteven.strength).toEqual(5);
      expect(testSteven.abilityPoints).toEqual(15);
    });
  });

  describe('healAlly', function() {
    it("heals target by 3 times Steven's level", function() {
      let testAlly = new Character('Peridot');
      testAlly.health = 10;
      testSteven.healAlly(testAlly);
      expect(testAlly.health).toEqual(13);
    });

    it("does not cast if Steven has less than 5 AP", function() {
      let testAlly = new Character('Peridot');
      testAlly.health = 10;
      testSteven.abilityPoints = 4;
      expect(testSteven.healAlly(testAlly)).toEqual(false);
      expect(testAlly.health).toEqual(10);
    });
  });
});
