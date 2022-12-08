const R = "rock";
const P = "paper";
const S = "scissors";

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice() {
  let rnd = getRandomInteger(0, 3);
  switch(rnd) {
    case 0: return R;
    case 1: return P;
    case 2: return S;
    default: return "";
  }
}

function getPlayerChoice() {
  let choice;
  do {
    choice = prompt("Choose selection (rock/paper/scissors)").toLowerCase();
  } while(choice != R && choice != P && choice != S);
  console.log(`Player chose ${choice}`);
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection == computerSelection)
    return "draw";
  if(
    (playerSelection == R && computerSelection == S) ||
    (playerSelection == P && computerSelection == R) ||
    (playerSelection == S && computerSelection == P)
  )
    return "player";
  else
    return "computer";
}

function game(nRounds) {
  let result, playerSelection, computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let gameFinished = false;
  let currentRound = 1;
  let maxScore = Math.floor(nRounds/2) + 1;

  while(!gameFinished) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    switch(result) {
      case "draw":
        console.log(`Round ${currentRound}: draw! player ${playerScore} - ${computerScore} computer`);
        break;
      case "player":
        playerScore++;
        console.log(`Round ${currentRound}: you win! player ${playerScore} - ${computerScore} computer`);
        break;
      case "computer":
        computerScore++;
        console.log(`Round ${currentRound}: you lose! player ${playerScore} - ${computerScore} computer`);
        break;
      default: break;
    }

    currentRound++;
    if(currentRound > nRounds || playerScore == maxScore || computerScore == maxScore)
      gameFinished = true;
  }

  if(playerScore == computerScore)
    console.log(`Final result: Draw! ${playerScore} to ${computerScore}`)
  else if(playerScore < computerScore)
    console.log(`Final result: You lose! ${playerScore} to ${computerScore}`)
  else
    console.log(`Final result: You win! ${playerScore} to ${computerScore}`)
}
