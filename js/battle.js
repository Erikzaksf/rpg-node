import { Team } from './../js/team.js';

export class Battle {
  constructor(gemTeam, enemyTeam) {
    this.gemTeam = gemTeam;
    this.enemyTeam = enemyTeam;
    this.turnOrder = [];
    for (let i = 0; i < gemTeam.characters.length; i++) {
      this.turnOrder.push(gemTeam.characters[i]);
      this.turnOrder.push(enemyTeam.characters[i]);
    }
    this.turnCounter = 0;
  }
  startTurn(){
    return this.turnOrder[this.turnCounter]
  }
  endTurn(){
    this.turnCounter += 1;
    if (this.turnCounter >= 8){
      this.turnCounter = 0;
    }
  }
}
