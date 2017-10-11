import {Pearl} from './../js/pearl.js';
import {Character} from './../js/character.js';

describe('Pearl', function() {
  let testPearl;

  beforeEach(function() {
    testPearl = new Pearl('Pearl');
  });

  describe('constructor', function(){
    it("sets the character name to inputted name", function() {
      expect(testPearl.name).toEqual('Pearl');
    });

    it("sets the character stats to Pearl start amounts", function() {
      expect(testPearl.health).toEqual(10);
      expect(testPearl.dexterity).toEqual(15);
      expect(testPearl.strength).toEqual(8);
      expect(testPearl.abilityPoints).toEqual(20);
    });
  });

  describe('spearThrow', function() {
    it("removes Pearls strength from targets hp", function() {
      let testEnemy = new Character("Jasper");
      testPearl.throwSpear(testEnemy);
      expect(testEnemy.health).toEqual(92);
    });

    it("does not cast if Pearl has less than 5 AP", function() {
      let testEnemy = new Character("Jasper");
      testEnemy.health = 10;
      testPearl.abilityPoints = 3;
      expect(testPearl.throwSpear(testEnemy)).toEqual(false);
      expect(testEnemy.health).toEqual(10);
    });
  });

});
