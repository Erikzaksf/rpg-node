import {Character} from './../js/character.js';

export class Steven extends Character {
  constructor(name) {
    super(name);
    this.health = 8;
    this.dexterity = 5;
    this.strength = 5;
    this.abilityPoints = 15;
  }
}
