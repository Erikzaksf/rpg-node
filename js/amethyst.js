import { Character } from './../js/character.js';

export class Amethyst extends Character {
  constructor(name) {
    super(name);
    this.health = 15;
    this.dexterity = 8;
    this.strength = 12;
    this.abilityPoints = 15;
  }

  wreckingBall(targetTeam){
    if (this.abilityPoints >= 10){
      let self = this;
      targetTeam.characters.forEach(function(character){
        if (character.position === 2){
          character.damageHealth(3 * self.level);
        }
      });
      return true;
    }else {
      return false;
    }
  }
}
