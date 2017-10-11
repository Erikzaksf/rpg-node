export class Character {
  constructor(name) {
    this.name = name;
    this.level = 1; // Max 50
    this.health = 100;
    this.dexterity = 100;
    this.strength = 100;
    this.abilityPoints = 100;
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
}
