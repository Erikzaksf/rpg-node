import { Character } from './../js/character.js';

export class Garnet extends Character {
  constructor(name) {
    super(name);
    this.health = 20;
    this.dexterity = 12;
    this.strength = 20;
    this.abilityPoints = 20;
  }

  powerfists(target) {
    if(this.abilityPoints >= 6 && Math.abs(target.position - this.position) <= 1) {
      target.damageHealth(this.strength / 2);
      target.position = 3;
      this.abilityPoints -= 6;
      return true;
    } else {
      return false;
    }
  }
}
