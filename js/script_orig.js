function playRound(playerSelection, computerSelection) {
  switch(computerSelection) {
  case 'rock':
    return "no winner"
    break;
  case 'paper':
    return "You Lose! Paper beats Rock"
    break;
  case 'scissors':
    return "You Win! Rock beats Scissors"
    break;
  }
}

function computerPlay () { 
	const rps = ["rock", "paper", "scissors"];
	return rps [Math.floor(Math.random() * rps.length)];
}

const playerSelection = "rock";
playerSelection.toLowerCase();
var computerSelection = computerPlay ();
console.log (playRound(playerSelection, computerSelection))