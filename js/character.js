export class Character {
  constructor(name) {
    this.name = name;
    this.level = 1; // Max 50
    this.experience = 0;
    this.health = 100;
    this.dexterity = 100;
    this.strength = 100;
    this.abilityPoints = 100;
    this.position = 0;
    this.inventory = {};
  }

  levelUp() {
    if (this.level === 50) {
      return this.level;
    } else {
      this.experience = 0;
      this.level += 1;
      return this.level;
    }
  }

  gainXP(points) {
    this.experience += points;
    if (this.experience >= this.level * 100) {
      this.levelUp();
    }
    return this.experience;
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

  take(item) {
    if (this.inventory.hasOwnProperty(item.name)) {
      this.inventory[item.name].push(item);
    } else {
      this.inventory[item.name] = [item];
    }
  }

  use(item) {
    if (this.inventory.hasOwnProperty(item.name) && this.inventory[item.name].length > 0) {
      let self = this;
      let statChanges = {
        health: function(effect) { self.health += effect; },
        dexterity: function(effect) { self.dexterity += effect; },
        strength: function(effect) { self.strength += effect; },
        abilityPoints: function(effect) { self.abilityPoints += effect; }
      };
      statChanges[item.stat](item.effect);
      this.inventory[item.name].pop();
      return true;
    } else {
      return false;
    }
  }
}
