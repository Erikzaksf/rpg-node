import { Amethyst } from './../js/amethyst.js';

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
});
