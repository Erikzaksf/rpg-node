import { Character } from './../js/character.js';

$(document).ready(function() {
  let char = new Character('Bob');
  alert(`Character ${char.name} is level ${char.level}.`);
  char.levelUp();
  alert(`Character ${char.name} is now level ${char.level}.`);
});
