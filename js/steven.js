import {Character} from './../js/character.js';

export class Steven extends Character {
  constructor(name) {
    super(name);
    this.health = 8;
    this.dexterity = 5;
    this.strength = 5;
    this.abilityPoints = 15;
  }

  healAlly(target) {
    if (this.abilityPoints >= 5) {
      target.heal(this.level * 3);
      this.abilityPoints -= 5;
      return true;
    } else {
      return false;
    }
  }
}
