import { Character } from './../js/character.js';

export class Amethyst extends Character {
  constructor(name) {
    super(name);
    this.health = 15;
    this.dexterity = 8;
    this.strength = 12;
    this.abilityPoints = 15;
  }
}
