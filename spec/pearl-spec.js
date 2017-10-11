import {Pearl} from './../js/pearl.js';

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
});
