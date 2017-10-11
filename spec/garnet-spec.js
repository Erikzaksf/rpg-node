import {Garnet} from './../js/garnet.js';
import {Character} from './../js/character.js';

describe('Garnet', function() {
  let testGarnet;

  beforeEach(function() {
    testGarnet = new Garnet('Garnet');
  });

  describe('constructor', function() {
    it("sets stats to Garnet's starting values", function() {
      expect(testGarnet.health).toEqual(20);
      expect(testGarnet.dexterity).toEqual(12);
      expect(testGarnet.strength).toEqual(20);
      expect(testGarnet.abilityPoints).toEqual(20);
    });
  });

  describe('powerfists', function() {
    it("does half Garnet's strength in damage, and moves target back", function() {
      let testEnemy = new Character('Jasper');
      testEnemy.position = 2;
      testGarnet.position = 1;
      testGarnet.powerfists(testEnemy);
      expect(testEnemy.health).toEqual(90);
      expect(testEnemy.position).toEqual(3);
    });

    it("does not cast if Garnet has less than 6 AP", function() {
      let testEnemy = new Character('Jasper');
      testEnemy.position = 2;
      testGarnet.position = 1;
      testGarnet.abilityPoints = 5;
      expect(testGarnet.powerfists(testEnemy)).toEqual(false);
      expect(testEnemy.health).toEqual(100);
      expect(testEnemy.position).toEqual(2);
    });

    it("does not cast if Garnet not next to the target", function() {
      let testEnemy = new Character('Jasper');
      testEnemy.position = 3;
      testGarnet.position = 1;
      expect(testGarnet.powerfists(testEnemy)).toEqual(false);
      expect(testEnemy.health).toEqual(100);
      expect(testEnemy.position).toEqual(3);
    });
  });
});
