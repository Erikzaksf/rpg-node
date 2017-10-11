import { Team } from './../js/team.js';
import { Character } from './../js/character.js';
import { Battle } from './../js/battle.js';

describe('Battle', function() {
  let testGem1;
  let testGem2;
  let testGem3;
  let testGem4;
  let testChar1;
  let testChar2;
  let testChar3;
  let testChar4;
  let testGemTeam;
  let testEnemyTeam;
  let testBattle;

  beforeEach(function() {
    testGem1 = new Character('Bob');
    testGem2 = new Character('Bob');
    testGem3 = new Character('Bob');
    testGem4 = new Character('Bob');
    testChar1 = new Character('Bob');
    testChar2 = new Character('Bob');
    testChar3 = new Character('Bob');
    testChar4 = new Character('Bob');
    testGemTeam = new Team([testGem1, testGem2, testGem3, testGem4], 'Crystal Gems');
    testEnemyTeam = new Team([testChar1, testChar2, testChar3, testChar4], 'Homeworld Gems');
    testBattle = new Battle(testGemTeam, testEnemyTeam);
  });

  describe('constructor', function(){
    it("creates a turnOrder with teams alternating", function() {
      expect(testBattle.turnOrder).toEqual([testGem1,testChar1,testGem2,testChar2,testGem3,testChar3,testGem4,testChar4]);
    });
  });

  describe('startTurn', function(){
    it("returns active player", function(){
      expect(testBattle.startTurn()).toEqual(testGem1);
    });
    it("will skip player/char with 0 health points", function() {
      testGem1.health = 0;
      expect(testBattle.startTurn()).toEqual(testChar1);
    });
  });

  describe('endTurn', function(){
    it("increments the turnCounter", function(){
      testBattle.endTurn();
      expect(testBattle.startTurn()).toEqual(testChar1);
    });
  });

});
