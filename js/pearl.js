import {Character} from './../js/character.js';

export class Pearl extends Character {

  constructor(name){
    super(name);
    this.health = 10;
    this.dexterity = 15;
    this.strength = 8;
    this.abilityPoints = 20;
  }

  throwSpear(target){
    if (this.abilityPoints >=5) {
      target.damageHealth(this.strength);
      this.abilityPoints -= 5;
      return true;
    } else{
      return false;
    }
  }

}
