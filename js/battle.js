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
      let result = this.endTurn();
      if (result) {
        return result;
      } else {
        return this.startTurn();
      }
    }else{
      return activeChar;
    }
  }

  endTurn(){
    let over = this.battleOver();
    if (over) {
      //end battle stuff
      return 'Battle Complete'
    } else {
      this.turnCounter += 1;
      if (this.turnCounter >= 8){
        this.turnCounter = 0;
      }
    }
  }

  battleOver() {
    let gemWin = true;
    let enemyWin = true;
    this.gemTeam.characters.forEach(function(character) {
      if (character.health > 0) {
        enemyWin = false;
      }
    });
    this.enemyTeam.characters.forEach(function(character) {
      if (character.health > 0) {
        gemWin = false;
      }
    });
    if (gemWin && enemyWin) {
      return 'tie';
    } else if (gemWin) {
      return this.gemTeam;
    } else if (enemyWin){
      return this.enemyTeam;
    } else {
      return null;
    }
  }
}
