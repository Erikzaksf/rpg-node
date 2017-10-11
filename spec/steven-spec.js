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
});
