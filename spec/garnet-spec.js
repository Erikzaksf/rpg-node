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
});
