const R = "rock";
const P = "paper";
const S = "scissors";
const MAX_SCORE = 5;

let playerScore = 0;
let computerScore = 0;

const choiceButtons = document.querySelectorAll('.btn');
const resetButton = document.querySelector('#reset');
const winnerDisplay = document.querySelector('#winner');

choiceButtons.forEach(button => {
  button.addEventListener('click', _ => {
    playRound(button.id, getComputerChoice());
  });
});

const scores = document.querySelector('#scores');
const playerMove = document.querySelector('#player-choice');
const computerMove = document.querySelector('#computer-choice');

resetButton.addEventListener('click', _ => {
  enableButtons();
  playerScore = 0;
  computerScore = 0;
  playerMove.innerText = null;
  computerMove.innerText = null;
  winnerDisplay.innerText = null;
  scores.innerText = `Player ${playerScore} - ${computerScore} Computer`;
});

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  playerMove.innerText = playerSelection;
  computerMove.innerText = computerSelection;

  if(playerSelection !== computerSelection) {
    if(
      (playerSelection == R && computerSelection == S) ||
      (playerSelection == P && computerSelection == R) ||
      (playerSelection == S && computerSelection == P)
    )
      playerScore++;
    else
      computerScore++;
  }

  scores.innerText = `Player ${playerScore} - ${computerScore} Computer`;
  if(playerScore === MAX_SCORE) {
    winnerDisplay.innerText = "You win!";
    disableButtons();
  }
  if(computerScore === MAX_SCORE) {
    winnerDisplay.innerText = "You lose!";
    disableButtons();
  }
}

function disableButtons() {
  choiceButtons.forEach(button => {
    button.setAttribute("disabled", "");
  });
}

function enableButtons() {
  choiceButtons.forEach(button => {
    button.removeAttribute("disabled");
  });
}

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
