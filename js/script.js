function playRound(playerSelection, computerSelection, score) {
  const concat = computerSelection + playerSelection
  concat.toLowerCase();
  switch(concat) {
  case 'rockrock': case 'paperpaper': case 'scissorsscissors':
    return "draw";
  case 'rockscissors':
    score.myScore += 1;
    return "You Lose! Rock beats Scissors";
  case 'rockpaper':
    score.yourScore += 1;
    return "You Win! Paper beats Rock";
  case 'paperrock':
    score.myScore += 1;
    return "You Lose! Paper beats Rock";  
  case 'paperscissors':
    score.yourScore += 1;
    return "You Win! Scissors beats Paper";  
  case 'scissorspaper':
    score.myScore += 1;
    return "You Lose! Scissors beats Paper";   
   case 'scissorsrock':
   score.yourScore += 1;
    return "You Win! Rock beats Scissors";
  }
}

const rps = ["rock", "paper", "scissors"];
function computerPlay () { 
	return rps [Math.floor(Math.random() * rps.length)];
}

//const playerSelection = "rock";

function userPlay () {
  var validInput = false;
  var playerSelection = prompt("enter rock, paper or scissors");
  while (validInput == false) {  
    for (var selectionCheck in rps) {
      if (playerSelection == rps[selectionCheck]) {
        validInput = true;
      }
    }
    if (validInput == false) {
      playerSelection = prompt(playerSelection + " is invalid: enter rock, paper or scissors"); 
    } 
  }
  return playerSelection;
}

var score = {myScore: 0, yourScore: 0}
for (var i = 0; i < 5; i++) {
  const computerSelection = computerPlay ();
  const userSelection = userPlay ();
  console.log (playRound(userSelection, computerSelection, score));
  console.log ("you: " + score.yourScore + ", me: " + score.myScore);
}
console.log ("final score");
console.log ("you: " + score.yourScore + ", me: " + score.myScore);