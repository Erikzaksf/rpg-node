import { Amethyst } from './../js/amethyst.js';
import {Team} from './../js/team.js';
import {Character} from './../js/character.js';

describe("Amethyst", function() {
  let testAmethyst;

  beforeEach(function() {
    testAmethyst = new Amethyst('Amethyst');
  });

  describe('constructor', function() {
    it("sets stats to Amethyst starting amounts", function() {
      expect(testAmethyst.health).toEqual(15);
      expect(testAmethyst.dexterity).toEqual(8);
      expect(testAmethyst.strength).toEqual(12);
      expect(testAmethyst.abilityPoints).toEqual(15);
    });
  });

  describe('wreckingBall', function() {
    it("damages all enemies in the forward position",function() {
      let testChar1 = new Character('one');
      testChar1.position = 2;
      let testChar2 = new Character('two');
      testChar2.position = 2;
      let testChar3 = new Character('three');
      let testChar4 = new Character('four');
      let testTeam = new Team ([testChar1, testChar2, testChar3, testChar4],'CrystalGems');
      testAmethyst.wreckingBall(testTeam);
      expect(testChar1.health).toEqual(97);
      expect(testChar2.health).toEqual(97);
      expect(testChar3.health).toEqual(100);
      expect(testChar4.health).toEqual(100);
    });

    it('does not cast if Amethyst has less than 10 AP', function() {
      let testChar1 = new Character('one');
      testChar1.position = 2;
      let testChar2 = new Character('two');
      testChar2.position = 2;
      let testChar3 = new Character('three');
      let testChar4 = new Character('four');
      let testTeam = new Team ([testChar1, testChar2, testChar3, testChar4],'CrystalGems');
      testAmethyst.abilityPoints = 6;
      expect(testAmethyst.wreckingBall(testTeam)).toEqual(false);
      expect(testChar1.health).toEqual(100);
      expect(testChar2.health).toEqual(100);
      expect(testChar3.health).toEqual(100);
      expect(testChar4.health).toEqual(100);
    })
  });

});
