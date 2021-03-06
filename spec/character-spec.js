import { Item } from './../js/item.js';
import { Character } from './../js/character.js';

describe('Character', function() {
  let testChar;
  beforeEach(function() {
    testChar = new Character('Bob');
  });

  describe('constructor', function() {
    it("sets the character's name to the inputted name", function() {
      expect(testChar.name).toEqual('Bob');
    });

    it("sets the character's starting level to 1", function() {
      expect(testChar.level).toEqual(1);
    });
  });

  describe('levelUp', function() {
    it("does not allow a character to level past 50", function() {
      testChar.level = 50;
      expect(testChar.levelUp()).toEqual(50);
    });

    it("resets a character's XP counter to 0", function() {
      testChar.experience = 100;
      testChar.levelUp();
      expect(testChar.experience).toEqual(0);
    });
  });

  describe('gainXP', function() {
    it("adds the given XP amount to the character's experience stat", function() {
      testChar.gainXP(20);
      expect(testChar.experience).toEqual(20);
    });

    it("levels character up when their XP passes their current level * 100", function() {
      testChar.gainXP(101);
      expect(testChar.level).toEqual(2);
    })
  });

  describe('damageHealth', function() {
    it("removes the given amount from the character's health", function() {
      testChar.damageHealth(10);
      expect(testChar.health).toEqual(90);
    });
  });

  describe('heal', function() {
    it("adds the given amount to the character's health", function() {
      testChar.health = 10;
      testChar.heal(80);
      expect(testChar.health).toEqual(90);
    });

    it("does not go above 100", function() {
      testChar.health = 30;
      testChar.heal(80);
      expect(testChar.health).toEqual(100);
    });
  });

  describe('rest', function(){
    it("adds 5 ability points for each time unit rested", function() {
      testChar.abilityPoints = 80;
      testChar.rest(1);
      expect(testChar.abilityPoints).toEqual(85);
    });
  });

  describe('attack', function(){
    it("deals damage equal to characters strength", function(){
      let testEnemy = new Character("evilBob");
      testChar.attack(testEnemy);
      expect(testEnemy.health).toEqual(0);
    });

    it("does not allow character to attack a character that is not adjacent to them", function() {
      let testEnemy = new Character("evilBob");
      testEnemy.position = 3;
      expect(testChar.attack(testEnemy)).toEqual(false);
      expect(testEnemy.health).toEqual(100);
    });
  });

  describe("switchPosition", function() {
    it('moves Character to forward position if they are in back position', function() {
      testChar.switchPosition();
      expect(testChar.position).toEqual(1);
      testChar.position = 3;
      testChar.switchPosition();
      expect(testChar.position).toEqual(2);
    });

    it('moves Character to back position if they are in forward position', function() {
      testChar.position = 1;
      testChar.switchPosition();
      expect(testChar.position).toEqual(0);
      testChar.position = 2;
      testChar.switchPosition();
      expect(testChar.position).toEqual(3);
    });
  });

  describe('take', function() {
    it("adds the item to the character's inventory", function() {
      let testItem = new Item('Potion', 'health', 5);
      testChar.take(testItem);
      expect(testChar.inventory).toEqual({'Potion': [testItem]})
    });
  });

  describe('use', function() {
    it("changes the item's assigned stat by the item's assigned effect", function() {
      let testItem = new Item('Potion', 'health', 5);
      testChar.take(testItem);
      testChar.health = 10;
      testChar.use(testItem);
      expect(testChar.health).toEqual(15);
    });

    it("does not allow user to use an item that is not in their inventory", function() {
      let testItem = new Item('Potion', 'health', 5);
      testChar.take(testItem);
      testChar.use(testItem);
      testChar.health = 10;
      expect(testChar.use(testItem)).toEqual(false);
      expect(testChar.health).toEqual(10);
    });
  });
});
