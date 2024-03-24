let playerScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playMove = prompt('Pick a Move | Rock | Paper | Scissor');
    let compMove = getComputerChoice();
    playRound(playMove, compMove);
  }
}

function playRound(playerChoice, computerChoice) {
  let pMove = playerChoice.toLowerCase();
  let cMove = computerChoice.toLowerCase();

  if (pMove === cMove) {
    console.log('Its a Tie!');
  } else if (pMove === 'rock' && cMove === 'scissor') {
    console.log('You Win! Rock beats Scissor');
    playerScore += 1;
  } else if (pMove === 'paper' && cMove === 'rock') {
    console.log('You Win! Paper beats Rock');
    playerScore += 1;
  } else if (pMove === 'scissor' && cMove === 'paper') {
    console.log('You Win! Scissor beats Paper');
    playerScore += 1;
  } else if (cMove === 'rock' && pMove === 'scissor') {
    console.log('You Lose! Rock beats Scissor');
    computerScore += 1;
  } else if (cMove === 'paper' && pMove === 'rock') {
    console.log('You Lose! Paper beats Rock');
    computerScore += 1;
  } else if (cMove === 'scissor' && pMove === 'paper') {
    console.log('You Lose! Scissor beats Paper');
    computerScore += 1;
  }
}

function gameResults() {
  if (playerScore === 5) {
    console.log('Player Wins');
  } else if (computerScore === 5) {
    console.log('Computer Wins');
  } else {
    console.log('Its a TIE GAME');
  }
}

function getComputerChoice() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissor';
  }

  return computerMove;
}

playGame();
gameResults();
