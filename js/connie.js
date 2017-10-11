import {Character} from './../js/character.js';

export class Connie extends Character {
  constructor(name) {
    super(name);
    this.health = 5;
    this.dexterity = 18;
    this.strength = 18;
    this.abilityPoints = 8;
  }
}
