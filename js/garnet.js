import { Character } from './../js/character.js';

export class Garnet extends Character {
  constructor(name) {
    super(name);
    this.health = 20;
    this.dexterity = 12;
    this.strength = 20;
    this.abilityPoints = 20;
  }
}
