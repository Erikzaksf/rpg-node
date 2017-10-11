import { Connie } from './../js/connie.js';
import { Character } from './../js/character.js';

describe('Connie', function() {
  let testConnie;

  beforeEach(function() {
    testConnie = new Connie('Connie');
  });

  describe('constructor', function() {
    it("sets stats to Connie's starting values", function() {
      expect(testConnie.health).toEqual(5);
      expect(testConnie.dexterity).toEqual(18);
      expect(testConnie.strength).toEqual(18);
      expect(testConnie.abilityPoints).toEqual(8);
    });
  });

  describe('piercingLunge', function() {
    it("deals Connie's strength in damage to target if target is 1 or 2 squares away", function() {
      let testEnemy = new Character('Jasper');
      testEnemy.position = 2;
      testConnie.piercingLunge(testEnemy);
      expect(testEnemy.health).toEqual(82);
    });

    it("does not cast if Connie is more than two squares away", function() {
      let testEnemy = new Character('Jasper');
      testEnemy.position = 3;
      expect(testConnie.piercingLunge(testEnemy)).toEqual(false);
      expect(testEnemy.health).toEqual(100);
    });

    it("does not cast if Connie has less than 4 AP", function() {
      let testEnemy = new Character('Jasper');
      testEnemy.position = 2;
      testConnie.abilityPoints = 3;
      expect(testConnie.piercingLunge(testEnemy)).toEqual(false);
      expect(testEnemy.health).toEqual(100);
    });
  });
});
