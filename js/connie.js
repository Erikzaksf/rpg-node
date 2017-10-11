import {Character} from './../js/character.js';

export class Connie extends Character {
  constructor(name) {
    super(name);
    this.health = 5;
    this.dexterity = 18;
    this.strength = 18;
    this.abilityPoints = 8;
  }

  piercingLunge(target) {
    if (this.abilityPoints >= 4 && Math.abs(target.position - this.position) <= 2) {
      target.damageHealth(18);
      this.abilityPoints -= 4;
      return true;
    } else {
      return false;
    }
  }
}
