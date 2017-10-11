export class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
  }

  levelUp() {
    this.level += 1;
  }
}
