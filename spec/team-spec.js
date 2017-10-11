import {Team} from './../js/team.js';
import {Character} from './../js/character.js';

describe('Team', function() {
  let testTeam;
  let testChar1;
  let testChar2;
  let testChar3;
  let testChar4;

  beforeEach(function(){
    testChar1 = new Character('one');
    testChar2 = new Character('two');
    testChar3 = new Character('three');
    testChar4 = new Character('four');
    testTeam = new Team ([testChar1, testChar2, testChar3, testChar4],'CrystalGems');
  })

  describe('constructor', function(){
    it("sets the team name equal to the team name",function() {
      expect(testTeam.name).toEqual('CrystalGems');
    });
  });

  describe('constructor', function(){
    it("sets the team members equal to the team members",function() {
      expect(testTeam.characters).toEqual([testChar1, testChar2, testChar3, testChar4]);
    });
  });

});
