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
});
