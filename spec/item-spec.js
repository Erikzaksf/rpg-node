import { Item } from './../js/item.js';
import { Character } from './../js/character.js';

describe('Item', function() {
  let testItem;
  let testCharacter;

  beforeEach(function() {
    testItem = new Item('Potion', 'health', 5);
    testCharacter = new Character('Peridot');
  });

  describe('constructor', function() {
    it("saves item name, stat, and effect", function() {
      expect(testItem.name).toEqual('Potion');
      expect(testItem.stat).toEqual('health');
      expect(testItem.effect).toEqual(5);
    });
  });
});
