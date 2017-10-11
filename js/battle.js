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
    let activeChar = this.turnOrder[this.turnCounter];
    if (activeChar.health <= 0){
      this.endTurn();
      return this.startTurn();
    }else{
      return activeChar;
    }
  }
  endTurn(){
    this.turnCounter += 1;
    if (this.turnCounter >= 8){
      this.turnCounter = 0;
    }
  }
}
