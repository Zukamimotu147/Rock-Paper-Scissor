const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user-result img');
const cpuResult = document.querySelector('.cpu-result img');
const runningScore = document.querySelector('.running-score');
const moveResult = document.querySelector('.js-move-results');
const gameResult = document.querySelector('.js-game-results');
const pickRock = document.querySelector('.js-rock-move');
const pickPaper = document.querySelector('.js-paper-move');
const pickScissor = document.querySelector('.js-scissor-move');
const tryAgainBtn = document.querySelector('.js-try-again-btn');
const modal = document.querySelector('.js-modal-container');
const isPlaying = document.querySelector('#js-isplay');

let playerScore = 0;
let computerScore = 0;
let gameOver = false;
updateScore();

pickRock.addEventListener('click', () => {
  playGame('rock');
});

pickPaper.addEventListener('click', () => {
  playGame('paper');
});

pickScissor.addEventListener('click', () => {
  playGame('scissor');
});

tryAgainBtn.addEventListener('click', () => {
  tryAgain();
});

function playGame(playerChoice) {
  let computerMove = getComputerChoice();
  gameContainer.classList.add('start');
  moveResult.textContent = 'Let Computer Cook...';
  isPlaying.disabled = true;
  let time = setTimeout(() => {
    gameContainer.classList.remove('start');
    isPlaying.disabled = false;
    showHand(playerChoice, computerMove);
    updateScore();
    if (!gameOver) {
      playRound(playerChoice, computerMove);
      updateScore();
    }

    isWinner();
  }, 2500);
}

function isWinner() {
  if (playerScore == 5) {
    gameOver = true;
    gameResult.textContent = 'Player Wins!';
    modal.style.display = 'block';
  } else if (computerScore == 5) {
    gameOver = true;
    gameResult.textContent = 'Computer Wins!';
    modal.style.display = 'block';
  }
}

function showHand(playerChoice, computerMove) {
  userResult.src = `asset/${playerChoice}.svg`;
  cpuResult.src = `asset/${computerMove}.svg`;
}

function updateScore() {
  runningScore.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

function playRound(playerChoice, computerChoice) {
  let pMove = playerChoice.toLowerCase();
  let cMove = computerChoice.toLowerCase();

  if (pMove === cMove) {
    moveResult.textContent = "It's a Tie!";
  } else if (pMove === 'rock' && cMove === 'scissor') {
    moveResult.textContent = 'You Win! Rock beats Scissor';
    playerScore += 1;
  } else if (pMove === 'paper' && cMove === 'rock') {
    moveResult.textContent = 'You Win! Paper beats Rock';
    playerScore += 1;
  } else if (pMove === 'scissor' && cMove === 'paper') {
    moveResult.textContent = 'You Win! Scissor beats Paper';
    playerScore += 1;
  } else if (cMove === 'rock' && pMove === 'scissor') {
    moveResult.textContent = 'You Lose! Rock beats Scissor';
    computerScore += 1;
  } else if (cMove === 'paper' && pMove === 'rock') {
    moveResult.textContent = 'You Lose! Paper beats Rock';
    computerScore += 1;
  } else if (cMove === 'scissor' && pMove === 'paper') {
    moveResult.textContent = 'You Lose! Scissor beats Paper';
    computerScore += 1;
  }
}

function tryAgain() {
  location.reload();
  modal.style.display = 'none';
}

function getComputerChoice() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }

  return computerMove;
}
