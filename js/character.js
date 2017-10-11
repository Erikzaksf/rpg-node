export class Character {
  constructor(name) {
    this.name = name;
    this.level = 1; // Max 50
    this.health = 100;
    this.dexterity = 100;
    this.strength = 100;
    this.abilityPoints = 100;
    this.position = 0;
  }

  levelUp() {
    if (this.level === 50) {
      return this.level;
    } else {
      this.level += 1;
      return this.level;
    }
  }

  damageHealth(damage) {
    this.health -= damage;
    return this.health;
  }

  heal(points) {
    this.health += points;
    if (this.health > 100) {
      this.health = 100;
    }
    return this.health;
  }

  rest(time) {
    this.abilityPoints += time * 5;
    if (this.abilityPoints > 100) {
      this.abilityPoints = 100;
    }
    return this.abilityPoints;
  }

  attack(target) {
    if (Math.abs(target.position - this.position) <= 1) {
      target.damageHealth(this.strength);
      return true;
    } else {
      return false;
    }
  }

  switchPosition() {
    let directions = {0: 1, 1: 0, 2: 3, 3: 2}
    this.position = directions[this.position];
  }
}
